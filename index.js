const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const server = require('http').createServer(app);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/snake', (req, res) => {
  res.render('snake');
});

app.get('/pong', (req, res) => {
  res.render('pong');
});

app.get('/breakout', (req, res) => {
  res.render('breakout');
});

app.get('/bubble', (req, res) => {
  res.render('bubble');
});

server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

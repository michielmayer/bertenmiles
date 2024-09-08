const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3002;
const server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:page', (req, res) => {
  res.render(req.params.page);
});

server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

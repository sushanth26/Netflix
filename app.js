var express = require('express');
var app = express();
var fs = require("fs");

app.use(express.static(__dirname + "/client"));

function readJsonFileSync() {
  var file = fs.readFileSync('./payload.json', 'utf8');
  return JSON.parse(file);
}
app.listen(4444, function () {
  console.log('Monet UI - Take Home Exercise on port: 4444!');
});

app.get('/', function (req, res) {
  res.send(readJsonFileSync());
});

app.get('/homepage', function (req, res) {
  res.sendFile(__dirname + '/server/index.html');
});
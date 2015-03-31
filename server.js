var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var Need = require('./src/needs.js');
var User = require('./src/user.js');
var Game = require('./src/game.js');
var util = require('util');

var happiness;
var tiredness;
var fullness;
var hunger;
var tamagotchi;
var user;
var game;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

app.get('/', function(request, response){
  user = new User()
  response.render('index');
  game = new Game()
});

app.post('/name', function(req, res) {
  var name = game.setUp(req.body.name, user)
  res.send(user.tamagotchi.name)
});

app.post('/pick', function(req, res){
  game.userChooses(req.body.choice, user)
  var item = game.needsLevels(user)
  res.send(item)
});

app.post('/intervals', function(req, res){
  var item = game.needsLevels(user)
  res.send(item)
});

server.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
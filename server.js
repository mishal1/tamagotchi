var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var Need = require('./src/needs');
var Tamagotchi = require('./src/tamagotchi');
var User = require('./src/user');
var Happiness = require('./src/happiness');
var Tiredness = require('./src/tiredness');
var Fullness = require('./src/fullness');
var Hunger = require('./src/hunger');
var util = require('util');

var happiness;
var tiredness;
var fullness;
var hunger;
var tamagotchi;
var user;

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

app.get('/', function(request, response){
  user = new User()
  response.render('index');
});

app.post('/name', function(req, res) {
  var name = setUpGame(req.body.name)
  res.send(name)
})

app.post('/pick', function(req, res){
  
  console.log(req.body.choice)
  // userChoice[req.body.choice]
  userChooses(req.body.choice)
  var item = needsLevels()
  res.send(item)
})

app.post('/intervals', function(req, res){
  // console.log(req.body.su)
});

function userChooses(need){
  var userChoice = {
    'eat': user.feedTamagotchi,
    'sleep': user.putTamagotchiToBed,
    'poop': user.makeTamagotchiPoop,
    'play': user.playWithTamagotchi
  };
  userChoice[need].call(user);
}

function needsLevels(){
  var item = {
    happiness: user.tamagotchi.needs[0].value * 10,
    tiredness: user.tamagotchi.needs[1].value * 10,
    fullness: user.tamagotchi.needs[2].value * 10,
    hunger: user.tamagotchi.needs[3].value * 10
  }
  return item
}

function setUpGame(name){
  happiness = new Happiness();
  tiredness = new Tiredness();
  fullness = new Fullness();
  hunger = new Hunger();
  tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
  user.hatch(tamagotchi)
  user.nameTamagotchi(name)
  // user.tamagotchi.init();
  return name
}

server.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
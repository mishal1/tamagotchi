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
  happiness = new Happiness();
  tiredness = new Tiredness();
  fullness = new Fullness();
  hunger = new Hunger();
  tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
  var name = req.body.name;
  user.hatch(tamagotchi)
  user.nameTamagotchi(name)
  user.tamagotchi.init();
  res.send(name)
})

server.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
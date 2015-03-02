var Happiness = require('./happiness');
var Tiredness = require('./tiredness');
var Fullness = require('./fullness');
var Hunger = require('./hunger');
var Tamagotchi = require('./tamagotchi');

function Game(){}

Game.prototype.setUp = function(name, user) {
  happiness = new Happiness();
  tiredness = new Tiredness();
  fullness = new Fullness();
  hunger = new Hunger();
  tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
  user.hatch(tamagotchi)
  user.nameTamagotchi(name)
  user.tamagotchi.init();
};

Game.prototype.userChooses = function(need, user) {
  var userChoice = {
    'eat': user.feedTamagotchi,
    'sleep': user.putTamagotchiToBed,
    'poop': user.makeTamagotchiPoop,
    'play': user.playWithTamagotchi
  };
  userChoice[need].call(user);
};

Game.prototype.needsLevels = function(user) {
  var item = {
    happiness: user.tamagotchi.needs[0].value * 10,
    tiredness: user.tamagotchi.needs[1].value * 10,
    fullness: user.tamagotchi.needs[2].value * 10,
    hunger: user.tamagotchi.needs[3].value * 10
  }
  return item
};

module.exports = Game;
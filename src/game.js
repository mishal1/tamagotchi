var Need = require('./needs.js');
var Tamagotchi = require('./tamagotchi.js');

function Game(){}

Game.prototype.setUp = function(name, user) {
  this.happiness = new Need();
  this.tiredness = new Need();
  this.fullness = new Need();
  this.hunger = new Need();
  tamagotchi = new Tamagotchi(this.happiness, this.tiredness, this.fullness, this.hunger);
  user.hatch(tamagotchi);
  user.nameTamagotchi(name);
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
    happiness: this.happiness.value * 10,
    tiredness: this.tiredness.value * 10,
    fullness: this.fullness.value * 10,
    hunger: this.hunger.value * 10
  };
  return item;
};

module.exports = Game;
function Tamagotchi(happiness, tiredness, fullness, hunger){
  this.age = 0;
  this.happiness = happiness;
  this.tiredness = tiredness;
  this.fullness = fullness;
  this.hunger = hunger;
  this.alive = true;
}

Tamagotchi.prototype.init = function() {
  var _this = this;
  setInterval(function() {
    _this.passageOfTime(_this);}, 30000);
};

Tamagotchi.prototype.increaseAge = function() {
  this.age++;
};

Tamagotchi.prototype.setName = function(name) {
  this.name = name;
};

Tamagotchi.prototype.passageOfTime = function(_this) {
  _this.happiness.decrease();
  _this.tiredness.increase();
  _this.fullness.increase();
  _this.hunger.increase();
};

Tamagotchi.prototype.eat = function() {
  this.hunger.decrease();
  this.fullness.increase();
};

Tamagotchi.prototype.play = function() {
  this.happiness.increase();
  this.tiredness.increase();
};

Tamagotchi.prototype.sleep = function() {
  this.tiredness.decrease();
};

Tamagotchi.prototype.poop = function() {
  this.fullness.decrease();
};

module.exports = Tamagotchi;
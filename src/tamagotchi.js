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

Tamagotchi.prototype.checkIfAlive = function() {
  if(this.checkAllNeeds()) this.alive = false;
};

Tamagotchi.prototype.checkAllNeeds = function() {
  return this.checkValue(this.happiness, 0) && this.checkValue(this.tiredness, 10) && this.checkValue(this.fullness, 10) && this.checkValue(this.hunger, 10);
};

Tamagotchi.prototype.passageOfTime = function(_this) {
  _this.happiness.decrease();
  _this.tiredness.increase();
  _this.fullness.increase();
  _this.hunger.increase();
};

Tamagotchi.prototype.checkValue = function(need, number) {
  return need.value === number;
};

module.exports = Tamagotchi;
function Tamagotchi(happiness, tiredness, fullness, hunger){
  this.age = 0;
  this.needs = {"happiness": happiness, "tiredness": tiredness, "fullness": fullness, "hunger": hunger};
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
  return this.needs.happiness.value === 0 && this.needs.tiredness.value === 10 && this.needs.fullness.value === 10 && this.needs.hunger.value === 10;
};

Tamagotchi.prototype.passageOfTime = function(_this) {
  _this.needs.happiness.decrease();
  _this.needs.tiredness.increase();
  _this.needs.fullness.increase();
  _this.needs.hunger.increase();
};

module.exports = Tamagotchi;
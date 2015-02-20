function Tamagotchi(happiness, tiredness, fullness, hunger){
  this.age = 0;
  this.needs = [happiness, tiredness, fullness, hunger];
  this.alive = true;
  setInterval(this.passageOfTime, 30000);
}

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
  return this.needs[0].value === 0 && this.needs[1].value === 10 && this.needs[2].value === 10 && this.needs[3].value === 10;
};

Tamagotchi.prototype.passageOfTime = function() {
  this.needs[0].decrease();
  this.needs[1].increase();
  this.needs[2].increase();
  this.needs[3].increase();
};

module.exports = Tamagotchi;
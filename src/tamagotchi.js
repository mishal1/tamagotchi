function Tamagotchi(happiness, tiredness, fullness, hunger){
  this.age = 0;
  this.needs = [happiness, tiredness, fullness, hunger];

}

Tamagotchi.prototype.increaseAge = function() {
  this.age++;
};

Tamagotchi.prototype.setName = function(name) {
  this.name = name;
};

module.exports = Tamagotchi;
function User(){}

User.prototype.hatch = function(tamagotchi) {
  this.tamagotchi = tamagotchi;
};

User.prototype.nameTamagotchi = function(name) {
  var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  this.tamagotchi.setName(capitalized);
};

User.prototype.feedTamagotchi = function() {
  this.tamagotchi.hunger.decrease();
  this.tamagotchi.fullness.increase();
};

User.prototype.playWithTamagotchi = function() {
  this.tamagotchi.happiness.increase();
  this.tamagotchi.tiredness.increase();
};

User.prototype.putTamagotchiToBed = function() {
  this.tamagotchi.tiredness.decrease();
};

User.prototype.makeTamagotchiPoop = function() {
  this.tamagotchi.fullness.decrease();
};

module.exports = User;
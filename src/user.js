function User(){}

User.prototype.hatch = function(tamagotchi) {
  this.tamagotchi = tamagotchi;
};

User.prototype.nameTamagotchi = function(name) {
  var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  this.tamagotchi.setName(capitalized);
};

User.prototype.feedTamagotchi = function() {
  this.tamagotchi.eat();
};

User.prototype.playWithTamagotchi = function() {
  this.tamagotchi.play();
};

User.prototype.putTamagotchiToBed = function() {
  this.tamagotchi.sleep();
};

User.prototype.makeTamagotchiPoop = function() {
  this.tamagotchi.poop();
};

module.exports = User;
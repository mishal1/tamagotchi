function User(){}

User.prototype.hatch = function(tamagotchi) {
  this.tamagotchi = tamagotchi;
};

User.prototype.feedTamagotchi = function() {
  this.tamagotchi.needs[3].decrease();
  this.tamagotchi.needs[2].increase();
};

User.prototype.playWithTamagotchi = function() {
  this.tamagotchi.needs[0].increase();
  this.tamagotchi.needs[1].increase();
};

module.exports = User;
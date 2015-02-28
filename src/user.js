function User(){}

User.prototype.hatch = function(tamagotchi) {
  this.tamagotchi = tamagotchi;
};

User.prototype.nameTamagotchi = function(name) {
  this.tamagotchi.setName(name);
};

User.prototype.feedTamagotchi = function() {
  this.tamagotchi.needs[3].decrease();
  this.tamagotchi.needs[2].increase();

  // console.log('eat')
  // console.log('happiness')
  // console.log(this.tamagotchi.needs[0])
  // console.log('tiredness')
  // console.log(this.tamagotchi.needs[1])
  // console.log('fullness')
  // console.log(this.tamagotchi.needs[2])
  // console.log('hunger')
  // console.log(this.tamagotchi.needs[3])
  // console.log('======')
};

User.prototype.playWithTamagotchi = function() {
  this.tamagotchi.needs[0].increase();
  this.tamagotchi.needs[1].increase();

  // console.log('play')
  // console.log('happiness')
  // console.log(this.tamagotchi.needs[0])
  // console.log('tiredness')
  // console.log(this.tamagotchi.needs[1])
  // console.log('fullness')
  // console.log(this.tamagotchi.needs[2])
  // console.log('hunger')
  // console.log(this.tamagotchi.needs[3])
  // console.log('======')
};

User.prototype.putTamagotchiToBed = function() {
  this.tamagotchi.needs[1].decrease();

  // console.log('sleep')
  // console.log('happiness')
  // console.log(this.tamagotchi.needs[0])
  // console.log('tiredness')
  // console.log(this.tamagotchi.needs[1])
  // console.log('fullness')
  // console.log(this.tamagotchi.needs[2])
  // console.log('hunger')
  // console.log(this.tamagotchi.needs[3])
  // console.log('======')
};

User.prototype.makeTamagotchiPoop = function() {
  this.tamagotchi.needs[2].decrease();
  
  // console.log('poop')
  // console.log('happiness')
  // console.log(this.tamagotchi.needs[0])
  // console.log('tiredness')
  // console.log(this.tamagotchi.needs[1])
  // console.log('fullness')
  // console.log(this.tamagotchi.needs[2])
  // console.log('hunger')
  // console.log(this.tamagotchi.needs[3])
  // console.log('======')
};

module.exports = User;
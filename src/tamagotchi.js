 function Tamagotchi(){
  this.hatched = false;
 }

 Tamagotchi.prototype.hatch = function() {
   this.hatched = true;
   this.age = 0;
 };

 Tamagotchi.prototype.increaseAge = function() {
   this.age++;
 };

 module.exports = Tamagotchi; 
// var User = require('../../src/user');
// var Tamagotchi = require('../../src/tamagotchi');
// var Need = require('../../src/needs');
// var Fullness = require('../../src/fullness');
// var Happiness = require('../../src/happiness');
// var Hunger = require('../../src/hunger');
// var Tiredness = require('../../src/tiredness');

// describe('integration', function(){

//   var user, happiness, tiredness, fullness, hunger, tamagotchi;

//   beforeEach(function(){
//     user = new User;
//     happiness = new Need();
//     tiredness = new Need();
//     fullness = new Need();
//     hunger = new Need();
//     tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
//     user.hatch(tamagotchi);
//     user.nameTamagotchi('Mishal');
//   });

//   it('the user hatches their tamagotchi', function(){
//     expect(user.tamagotchi).toEqual(tamagotchi)
//   });

//   it('can name their tamagotchi', function(){
//     expect(user.tamagotchi.name).toEqual('Mishal')
//   });

//   describe('when the user feeds the tamagotchi', function(){

//     beforeEach(function(){
//       user.feedTamagotchi()
//     });

//     it('the tamagotchis hunger decreases', function(){
//       expect(user.tamagotchi.needs.hunger.value).toEqual(4)
//     });

//     it('the tamagotchis fullness increases', function(){
//       expect(user.tamagotchi.needs.fullness.value).toEqual(8)
//     });

//   });

//   describe('when a user plays with their tamagotchi', function(){

//     beforeEach(function(){
//       user.playWithTamagotchi()
//     });

//     it('the tamagotchis happiness increases', function(){
//       expect(user.tamagotchi.needs.happiness.value).toEqual(8)
//     });

//     it('the tamagotchis tiredness increases', function(){
//       expect(user.tamagotchi.needs.tiredness.value).toEqual(8)
//     });

//   });

//   it('when a user puts their tamagotchi to bed, the tamagotchis tiredness decreases', function(){
//     user.putTamagotchiToBed()
//     expect(user.tamagotchi.needs.tiredness.value).toEqual(4)
//   });

//   it('when a user makes their tamagotchi poop, the tamagotchis fullness decreases', function(){
//     user.makeTamagotchiPoop()
//     expect(user.tamagotchi.needs.fullness.value).toEqual(4)
//   });

// });
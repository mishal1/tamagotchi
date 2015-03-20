var User = require('../../src/user.js');
var Need = require('../../src/needs.js');
var Tamagotchi = require('../../src/tamagotchi.js');

describe('User', function(){

  var user, happiness, tiredness, fullness, hunger, tamagotchi;

  beforeEach(function(){
    happiness = new Need();
    tiredness = new Need();
    fullness = new Need();
    hunger = new Need();
    tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
    user = new User();
    user.hatch(tamagotchi);
  });

  it('can name their tamagotchi', function(){
    user.nameTamagotchi('Mishal');
    expect(tamagotchi.name).toEqual('Mishal');
  });

  describe('when a user feeds their tamagotchi', function(){

    beforeEach(function(){
      user.feedTamagotchi();
    });

    it('the tamagotchis hunger decreases', function(){
      expect(hunger.value).toEqual(4);
    });

    it('the tamagotchis fullness increases', function(){
      expect(fullness.value).toEqual(8);
    });

  });

  describe('when a user plays with their tamagotchi', function(){

    beforeEach(function(){
      user.playWithTamagotchi();
    });

    it('the tamagotchis happiness increases', function(){
      expect(happiness.value).toEqual(8);
    });

    it('the tamagotchis tiredness increases', function(){
      expect(tiredness.value).toEqual(8);
    });

  });

  it('when a user puts their tamagotchi to bed, the tamagotchis tiredness decreases', function(){
    user.putTamagotchiToBed();
    expect(tiredness.value).toEqual(4);
  });

  it('when a user makes their tamagotchi poop, the tamagotchis fullness decreases', function(){
    user.makeTamagotchiPoop();
    expect(fullness.value).toEqual(4);
  });

});
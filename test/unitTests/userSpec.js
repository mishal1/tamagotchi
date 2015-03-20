var User = require('../../src/user.js');
var Need = require('../../src/needs.js');

describe('User', function(){

  var user, happiness, tiredness, fullness, hunger, tamagotchi;

  beforeEach(function(){
    happiness = new Need();
    tiredness = new Need();
    fullness = new Need();
    hunger = new Need();
    tamagotchi = {needs: {"happiness": happiness, "tiredness": tiredness, "fullness": fullness, "hunger": hunger}}
    user = new User();
    user.hatch(tamagotchi)
  });

  it('can hatch the egg', function(){
    expect(user.tamagotchi).toEqual({"happiness": happiness, "tiredness": tiredness, "fullness": fullness, "hunger": hunger})
  });

  describe('when a user feeds their tamagotchi', function(){

    beforeEach(function(){
      user.feedTamagotchi()
    });

    it('the tamagotchis hunger decreases', function(){
      expect(user.tamagotchi.hunger.value).toEqual(4)
    });

    it('the tamagotchis fullness increases', function(){
      expect(user.tamagotchi.fullness.value).toEqual(8)
    });

  });

  describe('when a user plays with their tamagotchi', function(){

    beforeEach(function(){
      user.playWithTamagotchi()
    });

    it('the tamagotchis happiness increases', function(){
      expect(user.tamagotchi.happiness.value).toEqual(8)
    });

    it('the tamagotchis tiredness increases', function(){
      expect(user.tamagotchi.tiredness.value).toEqual(8)
    });

  });

  it('when a user puts their tamagotchi to bed, the tamagotchis tiredness decreases', function(){
    user.putTamagotchiToBed()
    expect(user.tamagotchi.tiredness.value).toEqual(4)
  });

    it('when a user makes their tamagotchi poop, the tamagotchis fullness decreases', function(){
    user.makeTamagotchiPoop()
    expect(user.tamagotchi.fullness.value).toEqual(4)
  });

});
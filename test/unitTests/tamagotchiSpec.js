var Tamagotchi = require('../../src/tamagotchi.js');
var Need = require('../../src/needs');

describe ('Tamagotchi', function(){

  var tamagotchi, happiness, tiredness, fullness, hunger;

  beforeEach(function(){
    happiness = new Need();
    tiredness = new Need();
    fullness = new Need();
    hunger = new Need();
    tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
  });

  it('has an age of 0', function(){
    expect(tamagotchi.age).toEqual(0);
  });

  it('can age', function(){
    tamagotchi.increaseAge();
    expect(tamagotchi.age).toEqual(1);
  });

  it('can set a name', function(){
    tamagotchi.setName('Mishal');
    expect(tamagotchi.name).toEqual('Mishal');
  });

  it('is alive when created', function(){
    expect(tamagotchi.alive).toEqual(true);
  });

  describe('when the tamagotchi eats', function(){

    beforeEach(function(){
      tamagotchi.eat();
    });

    it('hunger decreases', function(){
      expect(hunger.value).toEqual(4);
    });

    it('fullness increases', function(){
      expect(fullness.value).toEqual(8);
    });

  });

  describe('when the tamagotchi plays', function(){

    beforeEach(function(){
      tamagotchi.play();
    });

    it('happiness increases', function(){
      expect(happiness.value).toEqual(8);
    });

    it('tiredness increases', function(){
      expect(tiredness.value).toEqual(8);
    });

  });

  it('when the tamagotchi sleeps, tiredness decreases', function(){
    tamagotchi.sleep();
    expect(tiredness.value).toEqual(4);
  });

  it('when the tamagotchi poops, fullness decreases', function(){
    tamagotchi.poop();
    expect(fullness.value).toEqual(4);
  });

  describe('over time the tamagotchis needs will change', function(){

    beforeEach(function(){
      tamagotchi.passageOfTime(tamagotchi);
    });

    it('the tamagotchis happiness decreases', function(){
      expect(happiness.value).toEqual(4);
    });

    it('the tamagotchis tiredness increases', function(){
      expect(tiredness.value).toEqual(8);
    });

    it('the tamagotchis fullness increases', function(){
      expect(fullness.value).toEqual(8);
    });

    it('the tamagotchis hunger increases', function(){
      expect(hunger.value).toEqual(8);
    });

  });

});


var Tamagotchi = require('../../src/tamagotchi.js');
var Happiness = require('../../src/happiness.js');
var Tiredness = require('../../src/tiredness.js');
var Fullness = require('../../src/fullness.js');
var Hunger = require('../../src/hunger.js');

describe ('Tamagotchi', function(){

  var tamagotchi, happiness, tiredness, fullness, hunger;

  beforeEach(function(){
    happiness = jasmine.createSpyObj('happiness',['value'])
    tiredness = jasmine.createSpyObj('tiredness',['value'])
    fullness = jasmine.createSpyObj('fullness',['value'])
    hunger = jasmine.createSpyObj('hunger',['value'])
    tamagotchi = new Tamagotchi(happiness, tiredness, fullness, hunger);
  });

  it('has object containing the needs', function(){
    expect(tamagotchi.needs).toEqual([happiness, tiredness, fullness, hunger])
  });

  it('has an age of 0', function(){
    expect(tamagotchi.age).toEqual(0)
  });

  it('can age', function(){
    tamagotchi.increaseAge()
    expect(tamagotchi.age).toEqual(1)
  });

  it('can set a name', function(){
    tamagotchi.setName('Mishal')
    expect(tamagotchi.name).toEqual('Mishal')
  });

});


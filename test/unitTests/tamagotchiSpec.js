var Tamagotchi = require('../../src/tamagotchi.js');

describe ('Tamagotchi', function(){

  var tamagotchi

  beforeEach(function(){
    tamagotchi = new Tamagotchi();
  });

  it('is not hatched when initialized', function(){
    expect(tamagotchi.hatched).toEqual(false)
  });

  describe('after it has been hatched', function(){

    var hatch;

    beforeEach(function(){
      hatch = tamagotchi.hatch()
    });

    it('hatched status changes', function(){
      expect(tamagotchi.hatched).toEqual(true)
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

});


var Need = require('../../src/needs.js');

describe ('Need', function(){

  var need

  beforeEach(function(){
    need = new Need();
  });

  it('has a value of 10 when initialized', function(){
    expect(need.value).toEqual(10)
  });

  describe('is decreased', function(){

    beforeEach(function(){
      need.decrease()
    });

    it('by 2', function(){
      expect(need.value).toEqual(8)
    });

    it('can increase by 2', function(){
      need.increase()
      expect(need.value).toEqual(10)
    });

    it('has a minium value of 0', function(){
      for(var i = 0; i < 5; i++){need.decrease()}
      expect(need.value).toEqual(0)
    });

  });

  it('has a maximum value of 10', function(){
    need.increase()
    expect(need.value).toEqual(10)
  });

});
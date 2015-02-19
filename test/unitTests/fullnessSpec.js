var Fullness = require('../../src/fullness.js');
var sharedBehaviourForNeeds = require('./needsSpec')

describe ('Fullness', function(){

  var fullness = new Fullness();

  beforeEach(function(){
    fullness.value = 10;
  });

  sharedBehaviourForNeeds(fullness)

});
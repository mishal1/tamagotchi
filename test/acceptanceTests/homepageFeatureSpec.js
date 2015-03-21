var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Homepage', function() {

  var client = {};

  beforeEach(function(done) {
    client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}   });
    client.init(done);
  });

  afterEach(function(done) {
    client.end(done);
  });

  it('displays egg',function(done) {
    client
      .url('http://localhost:3000')
      .isVisible('.egg')
      .call(done);
  });

  it('displays a greeting after hatching', function(done){
    this.timeout(8000);
    client
      .url('http://localhost:3000')
      .click('.egg')
      .waitForVisible('#greeting', 5000)
      .getText('#greeting', function(err, text){
          expect(text).to.equal('Hello!');
      })
    .call(done);
  });

  it('asks user to name their tamagotchi', function(done){
    this.timeout(8000);
    client
      .url('http://localhost:3000')
      .click('.egg')
      .waitForVisible('#ask-name', 5000)
      .getText('#ask-name', function(err, text){
          expect(text).to.equal('What do you want to name me?');
      })
    .call(done);
  });

  it('a user can enter their name', function(done){
    this.timeout(8000)
    client
      .url('http://localhost:3000')
      .click('.egg')
      .waitForVisible('#input', 5000)
      .pause(2000)
      .setValue('#input', 'Mishal')
      .submit('#input')
    .call(done);
  });

});
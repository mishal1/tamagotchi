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

  it('it displays a greeting after hatching', function(done){
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

  

});
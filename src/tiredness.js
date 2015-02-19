var Need = require('./needs.js');

function Tiredness(){}

Tiredness.prototype = new Need();

module.exports = Tiredness;
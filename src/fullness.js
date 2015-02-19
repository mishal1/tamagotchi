var Need = require('./needs.js');

function Fullness(){}

Fullness.prototype = new Need();

module.exports = Fullness;
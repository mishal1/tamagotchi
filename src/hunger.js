var Need = require('./needs.js');

function Hunger(){}

Hunger.prototype = new Need();

module.exports = Hunger;
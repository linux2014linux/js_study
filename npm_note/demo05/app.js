var lodash = require('lodash');
var tap = require('tap');

var output = lodash.without([1, 2, 3], 1);
console.log(output);

var retext = require('retext');
var inspect = require('unist-util-inspect');
var syllable = require('retext-syllable');
 
retext().use(syllable).use(function () {
    return function (cst) {
        console.log(inspect(cst));
    };
}).process('A yellow fresh banana.');
var retext = require('retext');
var inspect = require('unist-util-inspect');
var syllable = require('retext-syllable');

function getSyllables (str) {
	return new Promise(function (resolve, reject){
		retext().use(syllable).use(function () {
		  return function(cst){
		  	resolve(cst.data.syllableCount)
		  }
		}).process(str)
	})
}

module.exports = getSyllables
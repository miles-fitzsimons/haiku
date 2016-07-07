var getSyllables = require('../lib/getSyllables')


function test () {
	getSyllables('hello there')
		.then(function(res){
			console.log('here',res)
		})
		.catch(function(err){
			console.log('error',err)
		})
}

test()
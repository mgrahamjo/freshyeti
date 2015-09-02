'use strict';

module.exports = function(response) {

	require('breadbox').db.get('posts').then(function(posts) {

		var context = {
			metaTitle: 'Mike Johnson, Javascript Developer',
			posts: posts
		}
		
		response.resolve(context);
	});	
};
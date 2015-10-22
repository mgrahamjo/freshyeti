'use strict';

module.exports = function(response) {

	require('breadbox').db.get('posts').then(function(posts) {

		var context = {
			bodyClass: 'write',
			metaTitle: 'Write',
			posts: posts,
			css: [
				'/styles/write.css'
			],
		};

		response.resolve(context);
	});
};
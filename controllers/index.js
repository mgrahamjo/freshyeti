'use strict';

const fs = require('fs'),
	getPosts = require('./modules/get-posts');

module.exports = function(response) {

	let context = {
		metaTitle: 'Mike Johnson, Javascript Developer',
		bodyClass: 'background'
	};

	getPosts().then(allPosts => {
		
		let posts = {},
			ids = Object.keys(allPosts);

		for (let i = 0; i < Math.max(5, ids.length); i++) {
			posts[ids[i]] = allPosts[ids[i]];
		}

		context.posts = posts;
		response.resolve(context);
	});
};
'use strict';

const getPosts = require('./modules/get-posts');

module.exports = response => {

	let context = {
		metaTitle: 'Mike Johnson, Javascript Developer'
	};

	getPosts().then(posts => {
		
		if (posts.length > 5) {
			posts = posts.splice(4, posts.length);
		}

		context.posts = posts;
		response.resolve(context);
	});
};
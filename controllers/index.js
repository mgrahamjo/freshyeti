'use strict';

module.exports = resolve => {

	const getPosts = require('./modules/get-posts');

	let context = {
		metaTitle: 'Mike Johnson, Javascript Developer',
		bodyClass: 'black'
	};

	getPosts().then(posts => {
		
		if (posts.length > 5) {
			posts = posts.splice(4, posts.length);
		}

		context.posts = posts;
		resolve(context);
	});
};
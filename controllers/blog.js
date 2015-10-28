'use strict';

const getPosts = require('./modules/get-posts');

module.exports = response => {

	let context = {
		metaTitle: 'Blog | Mike Johnson, Javascript Developer',
		bodyClass: 'background'
	};

	getPosts(true).then(posts => {
		context.posts = posts;
		response.resolve(context);
	});
};
'use strict';

const getPosts = require('./modules/get-posts');

module.exports = response => {

	let context = {
		bodyClass: 'write',
		metaTitle: 'Write',
		css: [
			'/styles/write.css'
		]
	};

	getPosts().then(posts => {
		context.posts = posts;
		response.resolve(context);
	});
};
'use strict';

module.exports = resolve => {

	const getPosts = require('./modules/get-posts');

	let context = {
		bodyClass: 'write',
		metaTitle: 'Write',
		css: [
			'/styles/write.css'
		]
	};

	getPosts().then(posts => {
		context.posts = posts;
		resolve(context);
	});
};
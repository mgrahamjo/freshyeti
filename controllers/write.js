'use strict';

const fs = require('fs'),
	getPosts = require('./modules/get-posts');

module.exports = function(response) {

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
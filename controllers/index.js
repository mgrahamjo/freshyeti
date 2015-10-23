'use strict';

const fs = require('fs'),
	getPosts = require('./modules/get-posts');

module.exports = function(response) {

	let context = {
		metaTitle: 'Mike Johnson, Javascript Developer'
	};

	getPosts().then(posts => {
		context.posts = posts;
		response.resolve(context);
	});
};
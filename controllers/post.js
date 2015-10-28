'use strict';

const bb = require('breadbox');

module.exports = (response, request) => {

	let context = {
		bodyClass: 'background'
	};

	bb.db.get('posts/' + request.params.id).then(post => {
		context.post = post[request.params.id];
		context.metaTitle = context.post.title + ' | Mike Johnson, Javascript Developer';
		response.resolve(context, 'post.html');
	});
};
'use strict';

module.exports = (resolve, request) => {

	const bb = require('breadbox');

	let context = {
		bodyClass: 'background'
	};

	bb.db.get('posts/' + request.params.id).then(post => {
		context.post = post[request.params.id];
		context.metaTitle = context.post.title + ' | Mike Johnson, Javascript Developer';
		resolve(context, 'post');
	});
};
'use strict';

module.exports = (resolve, request) => {

	const bb = require('breadbox');

	let postFile = 'posts/' + request.params.id;

	bb.db.get(postFile).then(post => {

		bb.csrf.makeToken(request).then((headers, token) => {

			let context = {
				bodyClass: 'write',
				metaTitle: 'Edit',
				id: request.params.id,
				post: post ? post[request.params.id] : {
					'new-post': {
						title: 'new-post'
					}
				},
				css: [
					'/styles/write.css',
					'/styles/markdown.min.css'
				],
				token: token
			};

			let newDate = new Date().toDateString();

			if (context.post) {
				context.post.date = context.post.date || newDate;
			} else {
				context.post = {
					date: newDate
				};
			}

			if (request.body) {

				let newPost = {};

				newPost[request.body.id] = {
					title: request.body.title,
					body: request.body.body,
					date: request.body.date
				};

				bb.db.del('posts/' + request.params.id).then(() => {
					bb.db.put('posts/' + request.body.id, newPost).then(() => {
						request.redirect('/write/' + request.body.id);
					});
				});

			} else {

				resolve(context, 'edit', headers);
			}
		});
	});
};
'use strict';

const bb = require('breadbox');

module.exports = (response, request) => {

	bb.db.get('posts').then(posts => {

		bb.csrf.makeToken(request).then((headers, token) => {

			let context = {
				bodyClass: 'write',
				metaTitle: 'Edit',
				id: request.params.id,
				post: posts ? posts[request.params.id] : {
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

			context.post.date = context.post.date || new Date().toDateString();

			if (request.body) {

				let post = {
					title: request.body.title,
					body: request.body.body,
					date: request.body.date
				};

				bb.db.drop('posts', request.body.oldId).then(() => {
					bb.db.put('posts', post, request.body.id).then(() => {
						request.redirect('/write/' + request.body.id);
					});
				});

			} else {

				response.resolve(context, 'edit.html', headers);
			}
		});
	});
};
'use strict';

var bb = require('breadbox');

module.exports = function(response, request) {

	bb.db.get('posts').then(function(posts) {

		bb.csrf.makeToken(request).then(function(headers, token) {

			var context = {
				bodyClass: 'write',
				metaTitle: 'Edit',
				id: request.params.id,
				post: posts ? posts[request.params.id] : {
					'new-post': {
						title: 'new-post'
					}
				},
				css: ['//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css', '//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css', '/styles/summernote.css', '/styles/write.css'],
				token: token,
			};

			context.post.date = context.post.date || new Date().toDateString();

			if (request.body) {

				var post = {
					title: request.body.title,
					body: request.body.body
				};

				bb.db.drop('posts', request.body.oldId);

				bb.db.put('posts', post, request.body.id).then(function() {

					request.redirect('/write/' + request.body.id);
				});

			} else {

				response.resolve(context, 'edit.html', headers);
			}
		});
	});
};
'use strict';

var bb = require('breadbox');

module.exports = function(response, request) {

	bb.db.get('posts').then(function(posts) {


		bb.csrf.makeToken(request).then(function(headers, token) {

			var context = {
				bodyClass: 'write',
				metaTitle: 'Edit',
				id: request.params.id,
				post: posts[request.params.id] ? posts[request.params.id] : {
					'new-post': {
						title: 'new-post'
					}
				},
				token: token,
			};

			if (request.body) {

				var post = {
					title: request.body.title,
					body: request.body.body
				};

				bb.db.drop('posts', request.body.oldId);

				bb.db.put('posts', post, request.body.id).then(function() {

					response.redirect('write/' + request.body.id, 200);
				});

			} else {

				response.resolve(context, 'edit.html', headers);
			}
		});
	});
};
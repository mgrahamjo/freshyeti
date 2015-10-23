'use strict';

const fs = require('fs'),
	bb = require('breadbox');

module.exports = function() {

	let posts = {},
		result = bb.promise();

	fs.readdir('././models/posts', (err, files) => {

		files.forEach(file => {
			
			bb.db.get('posts/' + file).then(function(post) {

				let postId = Object.keys(post)[0];

				posts[postId] = post[postId];

				if (files.indexOf(file) === files.length - 1) {
					result.resolve(posts);
				}
			});
		});
	});

	return result;
};
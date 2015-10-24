'use strict';

const fs = require('fs'),
	bb = require('breadbox');

module.exports = function(snip) {

	let posts = [],
		oldest,
		youngest,
		result = bb.promise();

	fs.readdir('./././models/posts', (err, files) => {

		files.forEach(file => {
			
			bb.db.get('posts/' + file).then(post => {

				if (snip) {
					let id = Object.keys(post)[0],
						snippet = post[id].body.substring(0, 400);
					post[id].body = snippet.substring(0, snippet.lastIndexOf(' '));
				}

				posts.push(post);

				if (files.indexOf(file) === files.length - 1) {

					posts.sort((a, b) => {
						return new Date(a.date) > new Date(b.date) ? -1 : 1;
					});

					result.resolve(posts);
				}
			});
		});
	});

	return result;
};
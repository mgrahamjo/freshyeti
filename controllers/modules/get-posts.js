'use strict';

module.exports = snip => {

	const fs = require('fs'),
		bb = require('breadbox');

	let posts = [],
		oldest,
		youngest;

	return bb.promise(resolve => {

		fs.readdir('./././data/posts', (err, files) => {

			files.forEach(file => {
				
				bb.db.get('posts/' + file).then(post => {

					let id = Object.keys(post)[0];

					if (snip) {
						let snippet = post[id].body.substring(0, 400);
						post[id].body = snippet.substring(0, snippet.lastIndexOf(' '));
					}

					post[id].id = id;

					posts.push(post[id]);

					if (files.indexOf(file) === files.length - 1) {

						posts = posts.sort((a, b) => {
							return new Date(a.date) > new Date(b.date) ? -1 : 1;
						}).filter(post => {
							return post.live;
						});
						
						resolve(posts);
					}
				});
			});
		});
	});
};
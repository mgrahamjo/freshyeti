'use strict';

const fs = require('fs');

module.exports = snip => {

	let posts = [],
		oldest,
		youngest;

	return new Promise(resolve => {

		fs.readdir('./././models/posts', (err, files) => {

			files.forEach(file => {
				
				global.breadbox.db.get('posts/' + file).then(post => {

					let id = Object.keys(post)[0];

					if (snip) {
						let snippet = post[id].body.substring(0, 400);
						post[id].body = snippet.substring(0, snippet.lastIndexOf(' '));
					}

					post[id].id = id;

					posts.push(post[id]);

					if (files.indexOf(file) === files.length - 1) {

						posts.sort((a, b) => {
							return new Date(a.date) > new Date(b.date) ? -1 : 1;
						});

						resolve(posts);
					}
				});
			});
		});
	});
};
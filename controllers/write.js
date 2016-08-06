module.exports = resolve => {

	const getPosts = require('./modules/get-posts');

	let context = {
		bodyClass: 'write',
		metaTitle: 'Write',
		css: [
			'/styles/write.css'
		]
	};

	getPosts(false, true).then(posts => {
		context.posts = posts;
		resolve(context);
	});
};
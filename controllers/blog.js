module.exports = resolve => {

	const getPosts = require('./modules/get-posts');

	let context = {
		metaTitle: 'Blog | Mike Johnson, Javascript Developer',
		bodyClass: 'background'
	};

	getPosts(true).then(posts => {
		context.posts = posts;
		resolve(context);
	});
};
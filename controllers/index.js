var bb = require('breadbox');

module.exports = function(response) {

	bb.db.get('posts').then(function(posts) {

		var context = {
			metaTitle: 'Mike Johnson, Javascript Developer',
			posts: posts
		}
		
		response.resolve(context);
	});
	
};
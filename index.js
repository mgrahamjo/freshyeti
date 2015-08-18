var breadbox = require('breadbox');

breadbox.init({
	controllers: {
		'/index': require('./controllers/index'),
		'/docs': function(request) { request.resolve(); }
	}
});
'use strict';

var breadbox = require('breadbox')({
	controllers: {
		'/index': require('./controllers/index'),
		'/blog': require('./controllers/blog'),
		'/post/{{id}}': require('./controllers/post'),
		'/breadbox': function(request) { request.resolve(undefined, 'breadbox/index.mnla'); },
		'/write|authenticate': require('./controllers/write'),
		'/write/{{id}}|authenticate': require('./controllers/edit'),
	},
	cacheHtml: false,
	dataPath: 'models'
});

breadbox.init();
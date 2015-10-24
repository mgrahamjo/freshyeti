'use strict';

var breadbox = require('breadbox');

breadbox.init({
	controllers: {
		'/index': require('./controllers/index'),
		'/post/{{id}}': require('./controllers/post'),
		'/breadbox/docs': function(request) { request.resolve(); },
		'/breadbox': function(request) { request.resolve(); },
		'/write|authenticate': require('./controllers/write'),
		'/write/{{id}}|authenticate': require('./controllers/edit'),
	},
	cacheHtml: false
});
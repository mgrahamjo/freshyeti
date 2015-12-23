'use strict';

require('breadbox')({
	controllers: {
		'/index': require('./controllers/index'),
		'/blog': require('./controllers/blog'),
		'/post/{{id}}': require('./controllers/post'),
		'/breadbox': resolve => { resolve({}, 'breadbox/index.mnla'); },
		'/write|authenticate': require('./controllers/write'),
		'/write/{{id}}|authenticate': require('./controllers/edit'),
		'/preview/{{folder}}/{{image}}': require('./controllers/preview')
	}
});

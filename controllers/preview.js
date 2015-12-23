'use strict';

module.exports = (resolve, request) => {

	resolve({
		folder: request.params.folder,
		image: request.params.image
	}, 'preview');
};
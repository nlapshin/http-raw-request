const frame = require('./frame');

module.exports = {
	toString(params = {}, headers = {}, body) {
		return frame.concat(
			frame.header(params, headers),
			frame.body(body),
			frame.end()
		);
	}
};
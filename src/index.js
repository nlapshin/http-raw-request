const frame = require('./frame');

module.exports = (params = {}, headers = {}, body) => {
	return frame.concat(
		frame.header(params, headers),
		frame.body(body),
		frame.end()
	);
};
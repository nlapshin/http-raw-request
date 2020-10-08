const format = require('../format');

module.exports = {
	header(params = {}, headers = {}) {
		return [
			format.startLine(params),
			...format.headers(headers),
		].join(format.delimer);
	},

	body(body) {
		return body ? `${format.doubleDelimer}${body}` : '';
	},

	end() {
		return format.doubleDelimer;
	},

	concat(header = '', body = '', end = '') {
		return `${header}${body}${end}`;
	}
};
const CRLF = '\r\n';

module.exports = {
	get delimer() {
		return CRLF;
	},

	get doubleDelimer() {
		return `${CRLF}${CRLF}`;
	},

	startLine({ method = 'GET', url = '/', httpVersion = '1.1' }) {
		return `${method} ${url} HTTP/${httpVersion}`;
	},

	headers(headers = {}) {
		return Object.keys(headers).reduce(function (list, key) {
			var value = headers[key];

			if (!Array.isArray(value)) {
				list.push(key + ': ' + value);
				return list;
			}

			for (var i = 0; i < value.length; i++) {
				list.push(key + ': ' + value[i]);
			}

			return list;
		}, []);
	},

	end() {
		return this.delimer;
	}
};
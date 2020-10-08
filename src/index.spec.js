const { expect } = require('chai');
const httpRawRequest = require('./');

describe('http-raw-request', () => {
	it('should create simple HTTP request', () => {
		expect(httpRawRequest()).to.equal('GET / HTTP/1.1\r\n\r\n');
		expect(httpRawRequest({ method: 'OPTIONS', httpVersion: '1.0', uri: '/path' })).to.equal('OPTIONS /path HTTP/1.0\r\n\r\n');
	});

	it('should create simple HTTP request with headers', () => {
		const headers = {
			Host: 'localhost',
			'User-Agent': 'User-Agent'
		};

		expect(httpRawRequest({}, headers)).to.equal('GET / HTTP/1.1\r\nHost: localhost\r\nUser-Agent: User-Agent\r\n\r\n');
	});

	it('should create simple HTTP request with headers and body', () => {
		const headers = {
			Host: 'localhost',
			'User-Agent': 'User-Agent'
		};

		expect(httpRawRequest({ method: 'POST' }, headers, 'Hello world')).to.equal('POST / HTTP/1.1\r\nHost: localhost\r\nUser-Agent: User-Agent\r\n\r\nHello world\r\n\r\n');
	});
});
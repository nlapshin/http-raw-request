# http-raw-request

Generate http request message

# Install

```sh
npm i http-raw-request
```

# Usage

## Simple example

Script:
```js
  const httpRawRequest = require('http-raw-request');

  const params = {
		httpVersion: '1.1',
		method: 'POST',
		url: '/'
	};

	const headers = { Host: 'localhost' };

	const body = 'Hello world'

  const request = httpRawRequest(params, headers, body);
```

HTTP Request:
```js
	POST / HTTP/1.1
	Host: localhost
	User-Agent: User-Agent

	Hello world

```

# Test

```sh
npm run test
```

# License

MIT © [nlapshin](https://www.npmjs.com/~nlapshin)
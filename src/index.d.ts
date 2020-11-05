declare module 'http-raw-request' {
  import { IncomingHttpHeaders } from 'http';

  export function toString(params?: IHTTPRawRequestParams, headers?: IncomingHttpHeaders, body?: string): string;
  export interface IHTTPRawRequestParams {
    httpVersion?: string;
    method?: string;
    url?: string;
	}
}
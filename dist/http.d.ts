import { NeedleHttpVerbs, NeedleOptions, NeedleResponse } from 'needle';

declare class HttpClient {
    private encodedApiKey;
    private baseApiUrl;
    constructor(apiKey: string);
    send(method: NeedleHttpVerbs, url: string, data?: string, opts?: NeedleOptions): Promise<NeedleResponse>;
}

export { HttpClient as default };

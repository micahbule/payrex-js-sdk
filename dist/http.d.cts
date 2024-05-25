import { NeedleResponse, NeedleHttpVerbs, BodyData, NeedleOptions } from 'needle';

declare class HttpClient {
    private encodedApiKey;
    constructor(apiKey: string);
    processError({ statusCode }: NeedleResponse): void;
    send(method: NeedleHttpVerbs, url: string, data?: BodyData, opts?: NeedleOptions): Promise<NeedleResponse>;
}

export { HttpClient as default };

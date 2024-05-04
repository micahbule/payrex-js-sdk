export default class HttpClient {
  private encodedApiKey: string;
  private baseApiUrl = "https://api.payrexhq.com";

  constructor(apiKey: string) {
    this.encodedApiKey = Buffer.from(`${apiKey}:`).toString("base64");
  }

  send(request: Partial<Request>): Promise<Response> {
    return fetch(
      {
        ...(request as Request),
        url: `${this.baseApiUrl}${request.url}`,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${this.encodedApiKey}`,
        },
      }
    );
  }
}

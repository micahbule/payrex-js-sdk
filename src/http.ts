import needle, { NeedleHttpVerbs, NeedleOptions, NeedleResponse } from "needle";

export default class HttpClient {
  private encodedApiKey: string;
  private baseApiUrl = "https://api.payrexhq.com";

  constructor(apiKey: string) {
    this.encodedApiKey = Buffer.from(`${apiKey}:`).toString("base64");
  }

  send(
    method: NeedleHttpVerbs,
    url: string,
    data?: string,
    opts?: NeedleOptions
  ): Promise<NeedleResponse> {
    const needleArgs: any[] = [method, `${this.baseApiUrl}${url}`];
    const needleOpts = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${this.encodedApiKey}`,
      },
    };

    if (data) {
      needleArgs.push(data);
    }

    if (!opts) {
      needleArgs.push(needleOpts);
    } else {
      needleArgs.push({
        ...needleOpts,
        ...opts,
      });
    }

    /**
     * Ignoring for now to avoid TS issues, but this is valid JS
     */
    // @ts-ignore
    return needle(...needleArgs);
  }
}

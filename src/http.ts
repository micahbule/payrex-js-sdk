import needle, {
  BodyData,
  NeedleHttpVerbs,
  NeedleOptions,
  NeedleResponse,
} from "needle";
import { BASE_API_URL } from "./constants.js";
import ResourceNotFoundError from "./errors/resource-not-found.js";
import InvalidAuthError from "./errors/invalid-auth.js";
import InvalidRequestError from "./errors/invalid-request.js";

export default class HttpClient {
  private encodedApiKey: string;

  constructor(apiKey: string) {
    this.encodedApiKey = Buffer.from(`${apiKey}:`).toString("base64");
  }

  processError({ statusCode }: NeedleResponse) {
    if (statusCode === 400) {
      throw new InvalidRequestError();
    }

    if (statusCode === 401) {
      throw new InvalidAuthError();
    }

    if (statusCode === 404) {
      throw new ResourceNotFoundError();
    }

    throw new Error(`The server responded with a ${statusCode} status code`);
  }

  async send(
    method: NeedleHttpVerbs,
    url: string,
    data?: BodyData,
    opts?: NeedleOptions
  ): Promise<NeedleResponse> {
    const needleArgs: [NeedleHttpVerbs, string, BodyData, NeedleOptions?] = [
      method,
      `${BASE_API_URL}${url}`,
      "",
    ];
    const defaultNeedleOpts = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${this.encodedApiKey}`,
      },
    };

    if (data) {
      /**
       * To satisfy TS, we needed to input an empty string as 3rd argument for
       * now because I'm not the TS-God. Remove the 3rd argument, and push the
       * proper data if data parameter is present.
       */
      needleArgs.splice(2, 1);
      needleArgs.push(data);
    }

    if (!opts) {
      needleArgs.push(defaultNeedleOpts);
    } else {
      needleArgs.push({
        ...defaultNeedleOpts,
        ...opts,
      });
    }

    const response = await needle(...needleArgs);
    const { statusCode } = response;

    if (statusCode && statusCode >= 400) {
      this.processError(response);
    }

    return response;
  }
}

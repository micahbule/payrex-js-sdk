import QueryString from "qs";
import HttpClient from "../http";
import { BaseService } from "../types";
import { CreateWebhookPayload } from "./types";
import WebhookDto from "./dto";

export default class WebhookService implements BaseService {
  basePath = "/webhooks";

  constructor(private readonly client: HttpClient) {}

  async create(params: CreateWebhookPayload) {
    const response = await this.client.send(
      "post",
      this.basePath,
      QueryString.stringify(params, { arrayFormat: "brackets" })
    );

    return new WebhookDto(response.body);
  }
}

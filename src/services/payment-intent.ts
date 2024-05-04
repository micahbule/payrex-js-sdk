import QueryString from "qs";
import HttpClient from "../http";
import { CreatePaymentIntentPayload } from "../types";

export default class PaymentIntentService {
  private basePath = "/payment_intents";

  constructor(private readonly client: HttpClient) {}

  async create(params: CreatePaymentIntentPayload) {
    const response = await this.client.send(
      "post",
      this.basePath,
      QueryString.stringify(params, { arrayFormat: "brackets" })
    );

    return response.body;
  }
}

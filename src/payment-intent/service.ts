import QueryString from "qs";
import HttpClient from "../http.js";
import { CreatePaymentIntentPayload } from "./types.js";
import PaymentIntentDto from "./dto.js";
import { BaseService } from "../types.js";

export default class PaymentIntentService implements BaseService {
  basePath = "/payment_intents";

  constructor(private readonly client: HttpClient) {}

  async create(params: CreatePaymentIntentPayload) {
    const response = await this.client.send(
      "post",
      this.basePath,
      QueryString.stringify(params, { arrayFormat: "brackets" }),
    );

    return new PaymentIntentDto(response.body);
  }

  async get(id: string) {
    const response = await this.client.send("get", `${this.basePath}/${id}`);

    return new PaymentIntentDto(response.body);
  }

  async capture(id: string, amount: number) {
    const response = await this.client.send(
      "post",
      `${this.basePath}/${id}/capture`,
      QueryString.stringify({ amount }, { arrayFormat: "brackets" }),
    );

    return new PaymentIntentDto(response.body);
  }
}

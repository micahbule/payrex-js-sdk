import HttpClient from "../http";
import { CreatePaymentIntentPayload } from "../types";

export default class PaymentIntentService {
  private baseUrl = "/payment_intents";

  constructor(private readonly client: HttpClient) {}

  create(params: CreatePaymentIntentPayload) {
    const formData = new FormData();
    const paramKeys = Object.keys(params) as Array<
      keyof CreatePaymentIntentPayload
    >;

    paramKeys.forEach((key) => {
      let value = params[key];

      switch (key) {
        case "amount":
          value = value?.toString();
        case "metadata":
          value = JSON.stringify(value);
      }

      formData.append(key, value as string);
    });

    this.client.send({
      url: this.baseUrl,
      method: "POST",
    });
  }
}

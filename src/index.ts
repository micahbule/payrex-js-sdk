import HttpClient from "./http";
import PaymentIntentService from "./payment-intent/service";

export default class PayRexClient {
  paymentIntent: PaymentIntentService;

  constructor(secretApiKey: string) {
    const httpClient = new HttpClient(secretApiKey);

    this.paymentIntent = new PaymentIntentService(httpClient);
  }
}

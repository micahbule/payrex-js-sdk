import HttpClient from "./http";
import PaymentIntentService from "./services/payment-intent";

export default class PayRexClient {
  paymentIntent: PaymentIntentService;

  constructor(secretApiKey: string) {
    const httpClient = new HttpClient(secretApiKey);

    this.paymentIntent = new PaymentIntentService(httpClient);
  }
}

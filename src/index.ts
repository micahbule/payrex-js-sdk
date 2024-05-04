import HttpClient from "./http";
import PaymentIntentService from "./services/payment-intent";

export default class PayRexClient {
  paymentIntentService: PaymentIntentService;

  constructor(secretApiKey: string) {
    const httpClient = new HttpClient(secretApiKey);

    this.paymentIntentService = new PaymentIntentService(httpClient);
  }
}

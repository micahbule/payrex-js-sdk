import HttpClient from "./http";
import PaymentIntentService from "./payment-intent/service";
import RefundService from "./refund/service";

export default class PayRexClient {
  paymentIntent: PaymentIntentService;
  refund: RefundService;

  constructor(secretApiKey: string) {
    const httpClient = new HttpClient(secretApiKey);

    this.paymentIntent = new PaymentIntentService(httpClient);
    this.refund = new RefundService(httpClient);
  }
}

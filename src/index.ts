import HttpClient from "./http";
import PaymentIntentService from "./payment-intent/service";
import RefundService from "./refund/service";
import WebhookService from "./webhooks/service";

export default class PayRexClient {
	paymentIntent: PaymentIntentService;
	refund: RefundService;
	webhook: WebhookService;

	constructor(secretApiKey: string) {
		const httpClient = new HttpClient(secretApiKey);

		this.paymentIntent = new PaymentIntentService(httpClient);
		this.refund = new RefundService(httpClient);
		this.webhook = new WebhookService(httpClient);
	}
}

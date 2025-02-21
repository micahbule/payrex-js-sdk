import { CheckoutSessionLineItem } from "./types.js";
import PaymentIntentDto from "../payment-intent/dto.js";

type CheckoutSessionLineItemDto = CheckoutSessionLineItem & {
	id: string;
	resource: string;
};

export default class CheckoutSessionDto {
	id: string;
	resource: string;
	customer_reference_id: string;
	client_secret: string;
	status: string;
	currency: string;
	line_items: CheckoutSessionLineItemDto[];
	livemode: boolean;
	url: string;
	payment_intent: PaymentIntentDto;
	metadata: Record<string, string> | null;
	success_url: string;
	cancel_url: string;
	payment_methods: string[];
	description: string;
	submit_type: string;
	expires_at: number;
	created_at: number;
	updated_at: number;

	constructor(apiResponse: any) {
		this.id = apiResponse.id;
		this.resource = apiResponse.resource;
		this.customer_reference_id = apiResponse.customer_reference_id;
		this.client_secret = apiResponse.client_secret;
		this.status = apiResponse.status;
		this.currency = apiResponse.currency;
		this.line_items = apiResponse.line_items;
		this.livemode = apiResponse.livemode;
		this.url = apiResponse.url;
		this.payment_intent = new PaymentIntentDto(apiResponse.payment_intent);
		this.metadata = apiResponse.metadata;
		this.success_url = apiResponse.success_url;
		this.cancel_url = apiResponse.cancel_url;
		this.payment_methods = apiResponse.payment_methods;
		this.description = apiResponse.description;
		this.submit_type = apiResponse.submit_type;
		this.expires_at = apiResponse.expires_at;
		this.created_at = apiResponse.created_at;
		this.updated_at = apiResponse.updated_at;
	}
}

import type CustomerDto from "../customer/dto";
import PaymentIntentDto from "../payment-intent/dto";
import StatementLineItemDto from "../statement-line-item/dto";
import type { AvailablePaymentMethods } from "../types";
import type { BillingStatementResource } from "./types";

export default class BillingStatementDto {
	id: string;
	resource: string;
	amount: number;
	currency: string;
	customer_id: string;
	description: string | null;
	status: string;
	line_items: StatementLineItemDto[];
	livemode: boolean;
	url: string;
	customer: Pick<CustomerDto, "id" | "name" | "email">;
	payment_intent: PaymentIntentDto;
	metadata: Record<string, string> | null;
	payment_settings: {
		payment_methods: AvailablePaymentMethods;
	};
	billing_details_collection: string;
	due_at: number;
	created_at: number;
	updated_at: number;

	constructor(apiResponse: BillingStatementResource) {
		this.id = apiResponse.id;
		this.resource = apiResponse.resource;
		this.amount = apiResponse.amount;
		this.currency = apiResponse.currency;
		this.customer_id = apiResponse.customer_id;
		this.description = apiResponse.description;
		this.status = apiResponse.status;
		this.line_items = apiResponse.line_items.map(
			(lineItem) => new StatementLineItemDto(lineItem),
		);
		this.livemode = apiResponse.livemode;
		this.url = apiResponse.url;
		this.customer = apiResponse.customer;
		this.payment_intent = new PaymentIntentDto(apiResponse.payment_intent);
		this.metadata = apiResponse.metadata;
		this.payment_settings = apiResponse.payment_settings;
		this.billing_details_collection = apiResponse.billing_details_collection;
		this.due_at = apiResponse.due_at;
		this.created_at = apiResponse.created_at;
		this.updated_at = apiResponse.updated_at;
	}
}

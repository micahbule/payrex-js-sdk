import type { CustomerResource } from "../customer/types";
import type { PaymentIntentResource } from "../payment-intent/types";
import type { AvailablePaymentMethods } from "../types";

export type CreateBillingStatementPayload = {
	customer_id: string;
	description?: string;
	billing_details_collection?: string;
	payment_settings: {
		payment_methods: AvailablePaymentMethods;
	};
	metadata?: Record<string, string>;
};

export type UpdateBillingStatementPayload = Partial<
	Omit<CreateBillingStatementPayload, "billing_details_collection">
> & {
	id: string;
};

export type BillingStatementResource = {
	id: string;
	resource: string;
	amount: number;
	currency: string;
	customer_id: string;
	description: string | null;
	status: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	line_items: any[]; // Fix typing
	livemode: boolean;
	url: string;
	customer: Pick<CustomerResource, "id" | "name" | "email">;
	payment_intent: PaymentIntentResource;
	metadata: Record<string, string> | null;
	payment_settings: {
		payment_methods: AvailablePaymentMethods;
	};
	billing_details_collection: string;
	due_at: number;
	created_at: number;
	updated_at: number;
};

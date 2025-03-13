import type { PaymentIntentResource } from "../payment-intent/types.js";
import type {
	AvailablePaymentMethods,
	PayrexPaymentMethodOptions,
} from "../types.js";

export type CheckoutSessionLineItem = {
	name: string;
	amount: number;
	quantity: number;
	description?: string;
	image?: string;
};

export type CreateCheckoutSessionPayload = {
	currency: string;
	payment_methods: AvailablePaymentMethods;
	line_items: CheckoutSessionLineItem[];
	success_url: string;
	cancel_url: string;
	customer_reference_id?: string;
	description?: string;
	submit_type?: string;
	payment_method_options?: PayrexPaymentMethodOptions;
	expires_at?: number;
	metadata?: Record<string, string>;
};

export type CheckoutSessionLineItemResource = Required<
	Omit<CheckoutSessionLineItem, "description" | "image">
> & {
	id: string;
	resource: string;
	description: string | null;
	image: string | null;
};

export type CheckoutSessionResource = {
	id: string;
	resource: string;
	customer_reference_id: string | null;
	client_secret: string;
	status: string;
	currency: string;
	line_items: CheckoutSessionLineItemResource[];
	livemode: boolean;
	url: string;
	payment_intent: PaymentIntentResource;
	metadata: Record<string, string> | null;
	success_url: string;
	cancel_url: string;
	payment_methods: AvailablePaymentMethods | string[];
	description: string | null;
	submit_type: string;
	expires_at: number;
	created_at: number;
	updated_at: number;
};

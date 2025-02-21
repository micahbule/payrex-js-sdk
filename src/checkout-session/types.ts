import {
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

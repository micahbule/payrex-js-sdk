import type {
	AvailablePaymentMethods,
	PayrexPaymentMethodOptions,
} from "../types.js";

type PayrexNextAction = {
	type: string;
	redirect_url: string;
};

export type CreatePaymentIntentPayload = {
	amount: number;
	payment_methods: AvailablePaymentMethods;
	currency: string;
	description?: string;
	payment_method_options?: PayrexPaymentMethodOptions;
	statement_descriptor?: string;
	metadata?: Record<string, string>;
};

export type PaymentIntentResource = {
	id: string;
	resource: string;
	amount: number;
	amount_received: number;
	amount_capturable: number;
	client_secret: string;
	currency: string;
	description: string;
	livemode: boolean;
	metadata: Record<string, string> | null;
	next_action: PayrexNextAction;
	payment_method_options: PayrexPaymentMethodOptions;
	payment_methods: AvailablePaymentMethods;
	statement_descriptor: string | null;
	status: string;
	created_at: number;
	updated_at: number;
};

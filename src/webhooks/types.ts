enum WebhookEvents {
	PAYMENT_INTENT_SUCCEEDED = "payment_intent.succeeded",
	PAYMENT_REFUNDED = "payment.refunded",
}

type WebhookEventStrings = `${WebhookEvents}`;

export type CreateWebhookPayload = {
	url: string;
	events: WebhookEventStrings[];
	description?: string;
};

export type UpdateWebhookPayload = Partial<CreateWebhookPayload> & {
	id: string;
};

export type WebhookResource = {
	id: string;
	resource: string;
	secret_key: string;
	status: string;
	description: string;
	livemode: boolean;
	url: string;
	events: WebhookEventStrings[] | string[];
	created_at: number;
	updated_at: number;
};

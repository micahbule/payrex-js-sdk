declare enum WebhookEvents {
    PAYMENT_INTENT_SUCCEEDED = "payment_intent.succeeded",
    PAYMENT_REFUNDED = "payment.refunded"
}
type WebhookEventStrings = `${WebhookEvents}`;
type CreateWebhookPayload = {
    url: string;
    events: WebhookEventStrings[];
    description?: string;
};
type UpdateWebhookPayload = Partial<CreateWebhookPayload> & {
    id: string;
};

export type { CreateWebhookPayload, UpdateWebhookPayload };

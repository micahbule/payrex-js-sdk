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

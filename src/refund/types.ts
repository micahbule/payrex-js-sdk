export type CreateRefundPayload = {
	amount: number;
	currency: string;
	payment_id: string;
	reason: string;
	description?: string;
	remarks?: string;
	metadata?: Record<string, string>;
};

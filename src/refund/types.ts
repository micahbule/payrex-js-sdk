export type CreateRefundPayload = {
	amount: number;
	currency: string;
	payment_id: string;
	reason: string;
	description?: string;
	remarks?: string;
	metadata?: Record<string, string>;
};

export type RefundResource = {
	id: string;
	resource: string;
	amount: number;
	status: string;
	currency: string;
	description: string;
	reason: string;
	remarks: string;
	livemode: boolean;
	metadata: Record<string, string>;
	payment_id: string;
	created_at: number;
	updated_at: number;
};

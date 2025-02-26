export type CustomerResource = {
	id: string;
	resource: string;
	billing_statement_prefix: string;
	email: string;
	currency: string;
	livemode: boolean;
	metadata: Record<string, string> | null;
	name: string;
	next_billing_statement_sequence_number: string;
	created_at: number;
	updated_at: number;
};

export type CreateCustomerPayload = {
	currency: string;
	name: string;
	email: string;
	billing_statement_prefix?: string;
	next_billing_statement_sequence_number?: string;
	metadata?: Record<string, string>;
};

export type UpdateCustomerPayload = Partial<CreateCustomerPayload> & {
	id: string;
};

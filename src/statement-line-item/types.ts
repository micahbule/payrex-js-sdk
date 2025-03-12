export type CreateStatementLinePayload = {
	billing_statement_id: string;
	quantity: number;
	unit_price: number;
	description: string;
};

export type UpdateStatementLinePayload = Partial<
	Omit<CreateStatementLinePayload, "billing_statement_id">
> & {
	id: string;
};

export type StatementLineResource = {
	id: string;
	resource: string;
	description: string;
	unit_price: number;
	quantity: number;
	billing_statement_id: string;
	livemode: boolean;
	created_at: number;
	updated_at: number;
};

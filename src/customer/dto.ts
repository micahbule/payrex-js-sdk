import type { CustomerResource } from "./types";

export default class CustomerDto {
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

	constructor(resource: CustomerResource) {
		this.id = resource.id;
		this.resource = resource.resource;
		this.billing_statement_prefix = resource.billing_statement_prefix;
		this.email = resource.email;
		this.currency = resource.currency;
		this.livemode = resource.livemode;
		this.metadata = resource.metadata;
		this.name = resource.name;
		this.next_billing_statement_sequence_number =
			resource.next_billing_statement_sequence_number;
		this.created_at = resource.created_at;
		this.updated_at = resource.updated_at;
	}
}

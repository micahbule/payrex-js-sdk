import type { StatementLineResource } from "./types";

export default class StatementLineItemDto {
	id: string;
	resource: string;
	description: string;
	unit_price: number;
	quantity: number;
	billing_statement_id: string;
	livemode: boolean;
	created_at: number;
	updated_at: number;

	constructor(apiResponse: StatementLineResource) {
		this.id = apiResponse.id;
		this.resource = apiResponse.resource;
		this.description = apiResponse.description;
		this.unit_price = apiResponse.unit_price;
		this.quantity = apiResponse.quantity;
		this.billing_statement_id = apiResponse.billing_statement_id;
		this.livemode = apiResponse.livemode;
		this.created_at = apiResponse.created_at;
		this.updated_at = apiResponse.updated_at;
	}
}

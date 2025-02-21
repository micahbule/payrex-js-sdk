export default class RefundDto {
	id: string;
	resource: string;
	amount: number;
	status: string;
	currency: string;
	description: string;
	reason: string;
	remarks: string;
	livemode: string;
	metadata: Record<string, string> | null;
	payment_id: string;
	created_at: number;
	updated_at: number;

	constructor(apiResponse: any) {
		this.id = apiResponse.id;
		this.resource = apiResponse.resource;
		this.amount = apiResponse.amount;
		this.status = apiResponse.status;
		this.currency = apiResponse.currency;
		this.description = apiResponse.description;
		this.reason = apiResponse.reason;
		this.remarks = apiResponse.remarks;
		this.livemode = apiResponse.livemode;
		this.metadata = apiResponse.metadata;
		this.payment_id = apiResponse.payment_id;
		this.created_at = apiResponse.created_at;
		this.updated_at = apiResponse.updated_at;
	}
}

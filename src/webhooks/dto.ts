export default class WebhookDto {
	id: string;
	resource: string;
	secret_key: string;
	status: string;
	description: string;
	livemode: boolean;
	url: string;
	events: string[];
	created_at: number;
	updated_at: number;

	constructor(apiResponse: any) {
		this.id = apiResponse.id;
		this.resource = apiResponse.resource;
		this.secret_key = apiResponse.secret_key;
		this.status = apiResponse.status;
		this.description = apiResponse.description;
		this.livemode = apiResponse.livemode;
		this.url = apiResponse.url;
		this.events = apiResponse.events;
		this.created_at = apiResponse.created_at;
		this.updated_at = apiResponse.updated_at;
	}
}

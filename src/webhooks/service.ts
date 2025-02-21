import QueryString from "qs";
import HttpClient from "../http.js";
import { BaseService } from "../types.js";
import { CreateWebhookPayload, UpdateWebhookPayload } from "./types.js";
import WebhookDto from "./dto.js";

type WebhookToggle = "enable" | "disable";

export default class WebhookService implements BaseService {
	basePath = "/webhooks";

	constructor(private readonly client: HttpClient) {}

	async create(params: CreateWebhookPayload) {
		const response = await this.client.send(
			"post",
			this.basePath,
			QueryString.stringify(params, { arrayFormat: "brackets" }),
		);

		return new WebhookDto(response.body);
	}

	async get(id?: string) {
		let finalUrl = this.basePath;

		if (id) {
			finalUrl = `${this.basePath}/${id}`;
		}

		const response = await this.client.send("get", finalUrl);

		if (id) {
			return new WebhookDto(response.body);
		} else {
			return response.body.data.map((webhook: any) => new WebhookDto(webhook));
		}
	}

	async update(params: UpdateWebhookPayload) {
		const { id, ...payload } = params;
		const response = await this.client.send(
			"put",
			`${this.basePath}/${id}`,
			payload,
		);
		return new WebhookDto(response.body);
	}

	async delete(id: string) {
		const response = await this.client.send("delete", `${this.basePath}/${id}`);
		return new WebhookDto(response.body);
	}

	private toggle(type: WebhookToggle) {
		return async (id: string) => {
			const response = await this.client.send(
				"post",
				`${this.basePath}/${id}/${type}`,
			);
			return new WebhookDto(response.body);
		};
	}

	disable = this.toggle("disable");
	enable = this.toggle("enable");
}

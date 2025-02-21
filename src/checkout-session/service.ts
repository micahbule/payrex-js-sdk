import { BaseService } from "../types.js";
import HttpClient from "../http.js";
import { CreateCheckoutSessionPayload } from "./types.js";
import QueryString from "qs";
import CheckoutSessionDto from "./dto.js";

export default class CheckoutSessionService implements BaseService {
	basePath = "/checkout_sessions";

	constructor(private readonly client: HttpClient) {}

	async create(params: CreateCheckoutSessionPayload) {
		const response = await this.client.send(
			"post",
			this.basePath,
			QueryString.stringify(params, { arrayFormat: "brackets" }),
		);

		return new CheckoutSessionDto(response.body);
	}

	async get(id: string) {
		const response = await this.client.send("get", `${this.basePath}/${id}`);

		return new CheckoutSessionDto(response.body);
	}

	async expire(id: string) {
		const response = await this.client.send(
			"post",
			`${this.basePath}/${id}/expire`,
		);

		return new CheckoutSessionDto(response.body);
	}
}

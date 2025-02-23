import QueryString from "qs";
import type HttpClient from "../http.js";
import type { CreateRefundPayload } from "./types.js";
import RefundDto from "./dto.js";
import type { BaseService } from "../types.js";

export default class RefundService implements BaseService {
	basePath = "/refunds";

	constructor(private readonly client: HttpClient) {}

	async create(params: CreateRefundPayload) {
		const response = await this.client.send(
			"post",
			this.basePath,
			QueryString.stringify(params, { arrayFormat: "brackets" }),
		);

		return new RefundDto(response.body);
	}
}

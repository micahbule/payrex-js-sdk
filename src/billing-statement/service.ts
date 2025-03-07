import type HttpClient from "../http";
import type { BaseService } from "../types";
import { formatRequestPayload } from "../utils";
import BillingStatementDto from "./dto";
import type {
	CreateBillingStatementPayload,
	UpdateBillingStatementPayload,
} from "./types";

export default class BillingStatementService implements BaseService {
	basePath = "/billing_statements";

	constructor(private readonly client: HttpClient) {}

	async create(params: CreateBillingStatementPayload) {
		const response = await this.client.send(
			"post",
			this.basePath,
			formatRequestPayload(params),
		);

		return new BillingStatementDto(response.body);
	}

	async update(params: UpdateBillingStatementPayload) {
		const { id, ...payload } = params;
		const response = await this.client.send(
			"put",
			`${this.basePath}/${id}`,
			formatRequestPayload(payload),
		);
		return new BillingStatementDto(response.body);
	}

	async getById(id: string) {
		const response = await this.client.send("get", `${this.basePath}/${id}`);
		return new BillingStatementDto(response.body);
	}

	async getAll() {
		/** TO-DO: Implement getAll */
	}

	async delete(id: string) {
		const response = await this.client.send("delete", `${this.basePath}/${id}`);
		return new BillingStatementDto(response.body);
	}

	perform(action: string) {
		return async (id: string) => {
			const response = await this.client.send(
				"post",
				`${this.basePath}/${id}/${action}`,
			);
			return new BillingStatementDto(response.body);
		};
	}

	finalize = this.perform("finalize");
	markUncollectible = this.perform("mark_uncollectible");
	void = this.perform("void");
	send = this.perform("send");
}

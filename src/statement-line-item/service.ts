import type HttpClient from "../http";
import type { BaseService } from "../types";
import { formatRequestPayload } from "../utils";
import StatementLineItemDto from "./dto";
import type {
	CreateStatementLinePayload,
	UpdateStatementLinePayload,
} from "./types";

export default class StatementLineService implements BaseService {
	basePath = "/billing_statement_line_items";

	constructor(private readonly client: HttpClient) {}

	async create(params: CreateStatementLinePayload) {
		const response = await this.client.send(
			"post",
			this.basePath,
			formatRequestPayload(params),
		);
		return new StatementLineItemDto(response.body);
	}

	async update({ id, ...params }: UpdateStatementLinePayload) {
		const response = await this.client.send(
			"put",
			`${this.basePath}/${id}`,
			formatRequestPayload(params),
		);
		return new StatementLineItemDto(response.body);
	}

	async delete(id: string) {
		const response = await this.client.send("delete", `${this.basePath}/${id}`);
		return new StatementLineItemDto(response.body);
	}
}

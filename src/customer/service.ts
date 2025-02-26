import type HttpClient from "../http";
import type { BaseService } from "../types";
import { formatRequestPayload } from "../utils";
import CustomerDto from "./dto";
import type {
	CreateCustomerPayload,
	CustomerResource,
	UpdateCustomerPayload,
} from "./types";

export default class CustomerService implements BaseService {
	basePath = "/customers";

	constructor(private readonly client: HttpClient) {}

	async create(params: CreateCustomerPayload) {
		const response = await this.client.send(
			"post",
			this.basePath,
			formatRequestPayload(params),
		);

		return new CustomerDto(response.body);
	}

	async update({ id, ...params }: UpdateCustomerPayload) {
		const response = await this.client.send(
			"put",
			`${this.basePath}/${id}`,
			formatRequestPayload(params),
		);

		return new CustomerDto(response.body);
	}

	async getAll() {
		const response = await this.client.send("get", this.basePath);
		return response.body.data.map(
			(customer: CustomerResource) => new CustomerDto(customer),
		);
	}

	async getById(id: string) {
		const response = await this.client.send("get", `${this.basePath}/${id}`);
		return new CustomerDto(response.body);
	}

	async delete(id: string) {
		const response = await this.client.send("delete", `${this.basePath}/${id}`);
		return new CustomerDto(response.body);
	}
}

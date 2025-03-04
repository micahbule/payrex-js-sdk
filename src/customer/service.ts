import type HttpClient from "../http.js";
import type { BaseService } from "../types.js";
import { formatRequestPayload } from "../utils.js";
import CustomerDto from "./dto.js";
import type {
	CreateCustomerPayload,
	CustomerResource,
	CustomerSearchParams,
	UpdateCustomerPayload,
} from "./types.js";

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

	async getAll(searchParams?: CustomerSearchParams) {
		let finalUrl = this.basePath;

		if (searchParams) {
			const { limit, metadata, ...compatibleParams } = searchParams;
			const queryParams = new URLSearchParams(compatibleParams);

			if (typeof limit !== "undefined" && limit > 0) {
				queryParams.append("limit", limit.toString());
			}

			if (typeof metadata !== "undefined") {
				for (const key in metadata) {
					queryParams.append(`metadata[${key}]`, metadata[key]);
				}
			}

			finalUrl += `?${queryParams.toString()}`;
		}

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

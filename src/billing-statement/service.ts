import type HttpClient from "../http";
import type { BaseService } from "../types";

export default class CheckoutSessionService implements BaseService {
	basePath = "/billing_statements";

	constructor(private readonly client: HttpClient) {}

	async create() {}
}

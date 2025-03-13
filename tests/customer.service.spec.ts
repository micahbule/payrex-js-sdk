import assert from "node:assert";
import sinon, { type SinonStub } from "sinon";
import CustomerDto from "../src/customer/dto.js";
import CustomerService from "../src/customer/service.js";
import HttpClient from "../src/http.js";
import customerFixture from "./fixtures/customer.fixture.js";

describe("customer service", () => {
	let service: CustomerService;
	let sendStub: SinonStub;
	const client = new HttpClient("someApiKey");

	before(() => {
		service = new CustomerService(client);
	});

	beforeEach(() => {
		sendStub = sinon.stub(client, "send");
	});

	afterEach(() => {
		sendStub.restore();
	});

	it("should create customer", async () => {
		sendStub.resolves(customerFixture);

		const response = await service.create({
			name: "Juan Dela Cruz",
			email: "juan@gmail.com",
			currency: "PHP",
		});

		assert.deepEqual(response, new CustomerDto(customerFixture.body));
	});

	it("should update customer", async () => {
		sendStub.resolves({
			body: {
				...customerFixture.body,
				currency: "SGD",
			},
		});

		const response = await service.update({
			id: "1",
			currency: "SGD",
		});

		assert.deepEqual(
			response,
			new CustomerDto({
				...customerFixture.body,
				currency: "SGD",
			}),
		);
	});

	it.skip("should get all customers");

	it("should get customer by id", async () => {
		sendStub.resolves(customerFixture);

		const response = await service.getById("1");

		assert.deepEqual(response, new CustomerDto(customerFixture.body));
	});

	it("should delete customer by id", async () => {
		sendStub.resolves(customerFixture);

		const response = await service.delete("1");

		assert.deepEqual(response, new CustomerDto(customerFixture.body));
	});
});

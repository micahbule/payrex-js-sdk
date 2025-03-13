import assert from "node:assert";
import sinon, { type SinonStub } from "sinon";
import CheckoutSessionDto from "../src/checkout-session/dto.js";
import CheckoutSessionService from "../src/checkout-session/service.js";
import HttpClient from "../src/http.js";
import checkoutSessionFixture from "./fixtures/checkout-session.fixture.js";

describe("checkout session service", () => {
	let service: CheckoutSessionService;
	let sendStub: SinonStub;
	const client = new HttpClient("someApiKey");

	before(() => {
		service = new CheckoutSessionService(client);
	});

	beforeEach(() => {
		sendStub = sinon.stub(client, "send");
	});

	afterEach(() => {
		sendStub.restore();
	});

	it("should create a checkout session", async () => {
		sendStub.resolves(checkoutSessionFixture);

		const response = await service.create({
			currency: "PHP",
			payment_methods: ["gcash"],
			line_items: [
				{
					name: "Line Item 1",
					amount: 10000,
					quantity: 2,
				},
			],
			success_url: "http://sample-url.com/success",
			cancel_url: "http://sample-url.com/cancel",
		});

		assert.deepEqual(
			response,
			new CheckoutSessionDto(checkoutSessionFixture.body),
		);
	});

	it("should get a checkout session", async () => {
		sendStub.resolves(checkoutSessionFixture);

		const response = await service.get("someCheckoutSessionId");

		assert.deepEqual(
			response,
			new CheckoutSessionDto(checkoutSessionFixture.body),
		);
	});

	it("should expire a checkout session", async () => {
		sendStub.resolves(checkoutSessionFixture);

		const response = await service.expire("someCheckoutSessionId");

		assert.deepEqual(
			response,
			new CheckoutSessionDto(checkoutSessionFixture.body),
		);
	});
});

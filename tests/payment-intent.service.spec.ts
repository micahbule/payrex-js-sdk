import assert from "node:assert";
import sinon, { type SinonStub } from "sinon";
import PaymentIntentService from "../src/payment-intent/service.js";
import HttpClient from "../src/http.js";
import PaymentIntentDto from "../src/payment-intent/dto.js";
import paymentIntentFixture from "./fixtures/payment-intent.fixture.js";

describe("payment intent service", () => {
	let service: PaymentIntentService;
	let sendStub: SinonStub;
	const client = new HttpClient("someApiKey");

	before(() => {
		service = new PaymentIntentService(client);
	});

	beforeEach(() => {
		sendStub = sinon.stub(client, "send");
	});

	afterEach(() => {
		sendStub.restore();
	});

	it("should create a payment intent", async () => {
		sendStub.resolves(paymentIntentFixture);

		const response = await service.create({
			amount: 10000,
			currency: "PHP",
			payment_methods: ["card"],
		});

		assert.deepEqual(response, new PaymentIntentDto(paymentIntentFixture.body));
	});

	it("should get a payment intent", async () => {
		sendStub.resolves(paymentIntentFixture);

		const response = await service.get("somePaymentIntentId");

		assert.deepEqual(response, new PaymentIntentDto(paymentIntentFixture.body));
	});

	it("should capture a payment for payment intent", async () => {
		sendStub.resolves(paymentIntentFixture);

		const response = await service.capture("somePaymentIntentId", 10000);

		assert.deepEqual(response, new PaymentIntentDto(paymentIntentFixture.body));
	});
});

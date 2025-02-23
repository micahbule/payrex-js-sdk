import assert from "node:assert";
import sinon, { type SinonStub } from "sinon";
import HttpClient from "../src/http.js";
import RefundService from "../src/refund/service.js";
import refundFixture from "./fixtures/refund.fixture.js";
import RefundDto from "../src/refund/dto.js";

describe("refund service", () => {
	let service: RefundService;
	let sendStub: SinonStub;
	const client = new HttpClient("someApiKey");

	before(() => {
		service = new RefundService(client);
	});

	beforeEach(() => {
		sendStub = sinon.stub(client, "send");
	});

	afterEach(() => {
		sendStub.restore();
	});

	it("should create a refund", async () => {
		sendStub.resolves(refundFixture);

		const response = await service.create({
			amount: 10000,
			currency: "PHP",
			reason: "The customer is not happy",
			payment_id: "somePaymentId",
		});

		assert.deepEqual(response, new RefundDto(refundFixture.body));
	});
});

import assert from "node:assert";
import sinon, { type SinonStub } from "sinon";
import HttpClient from "../src/http.js";
import WebhookService from "../src/webhooks/service.js";
import webhookFixture from "./fixtures/webhook.fixture.js";
import WebhookDto from "../src/webhooks/dto.js";

describe("refund service", () => {
	let service: WebhookService;
	let sendStub: SinonStub;
	const client = new HttpClient("someApiKey");

	before(() => {
		service = new WebhookService(client);
	});

	beforeEach(() => {
		sendStub = sinon.stub(client, "send");
	});

	afterEach(() => {
		sendStub.restore();
	});

	it("should create a webhook", async () => {
		sendStub.resolves(webhookFixture);

		const response = await service.create({
			url: "http://some-sample-url.com/webhook",
			events: ["payment_intent.succeeded"],
		});

		assert.deepEqual(response, new WebhookDto(webhookFixture.body));
	});

	it("should retrieve a webhook", async () => {
		sendStub.resolves(webhookFixture);

		const response = await service.get("wk_someWehbookId");

		assert.deepEqual(response, new WebhookDto(webhookFixture.body));
	});

	it("should retrieve a list of webhooks", async () => {
		sendStub.resolves({ body: { data: [webhookFixture.body] } });

		const response = await service.get();

		assert.deepEqual(response, [new WebhookDto(webhookFixture.body)]);
	});

	it("should update a webhook given an id", async () => {
		sendStub.resolves(webhookFixture);

		const response = await service.update({
			id: "wk_someWebhookId",
			url: "http://some-sample-url.com/webhook",
			events: ["payment_intent.succeeded"],
		});

		assert.deepEqual(response, new WebhookDto(webhookFixture.body));
	});

	it("should delete a webhook given an id", async () => {
		sendStub.resolves(webhookFixture);

		const response = await service.delete("wk_someWebhookId");

		assert.deepEqual(response, new WebhookDto(webhookFixture.body));
	});

	it("should disable a webhook given an id", async () => {
		sendStub.resolves(webhookFixture);

		const response = await service.enable("wk_someWebhookId");

		assert.deepEqual(response, new WebhookDto(webhookFixture.body));
	});

	it("should enable a webhook given an id", async () => {
		sendStub.resolves(webhookFixture);

		const response = await service.disable("wk_someWebhookId");

		assert.deepEqual(response, new WebhookDto(webhookFixture.body));
	});
});

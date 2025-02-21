const RefundFixture = {
	body: {
		id: "wh_225tMcrUMMdiwv2Ya7HTXAEifAx8nno2",
		resource: "webhook",
		secret_key: "whsk_cU8kMThbLEkF3yvz1ygCrPrBdAWguuCU",
		status: "enabled",
		description:
			"This is the webhook used for sending shipments after receiving successfully paid payments",
		livemode: false,
		url: "https://my-ecommerce.com/send-shipments",
		events: ["payment_intent.succeeded"],
		created_at: 1706056262,
		updated_at: 1706056471,
	},
};

export default RefundFixture;

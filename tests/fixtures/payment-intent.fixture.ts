const PaymentIntentFixture = {
	body: {
		id: "pi_SJuGtXXC3XNRWpW3W1zQKiLWf67ZC4sX",
		resource: "payment_intent",
		amount: 10000,
		amount_received: 0,
		amount_capturable: 0,
		client_secret:
			"pi_SJuGtXXC3XNRWpW3W1zQKiLWf67ZC4sX_secret_7KGizzHuLtPtaLwiRMHekBHRUo6yv52r",
		currency: "PHP",
		description: "",
		livemode: false,
		metadata: null,
		next_action: {
			type: "redirect",
			redirect_url: "https://my-application/redirect",
		},
		payment_method_options: {
			card: {
				capture_type: "automatic",
			},
		},
		payment_methods: ["card", "gcash"],
		statement_descriptor: null,
		status: "awaiting_payment_method",
		created_at: 1700407880,
		updated_at: 1700407880,
	},
};

export default PaymentIntentFixture;

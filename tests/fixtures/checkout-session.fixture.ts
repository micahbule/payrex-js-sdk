const CheckoutSessionFixture = {
  body: {
    id: "cs_AbvnRnF9r577BBFFuNsLFvXvLes1CeeS",
    resource: "checkout_session",
    customer_reference_id: null,
    client_secret:
      "cs_AbvnRnF9r577BBFFuNsLFvXvLes1CeeS_secret_tttefYgf9BgAnuiq9bN8EuwrpUShZU4E",
    status: "active",
    currency: "PHP",
    line_items: [
      {
        id: "cs_li_27xaTabzf7pBvpGjFAjHynVHVGbauwFz",
        resource: "checkout_session_line_item",
        name: "Some name",
        amount: 10000,
        quantity: 5,
        description: null,
        image: "https://some-url.com/1.jpg",
      },
      {
        id: "cs_li_XgdQMVST88szpcjMayDGaE3iGNEJvBx1",
        resource: "checkout_session_line_item",
        name: "Some name",
        amount: 10000,
        quantity: 5,
        description: null,
        image: null,
      },
    ],
    livemode: false,
    url: "https://checkout.payrexhq.com/c/cs_AbvnRnF9r577BBFFuNsLFvXvLes1CeeS_secret_tttefYgf9BgAnuiq9bN8EuwrpUShZU4E",
    payment_intent: {
      id: "pi_UDQ5s2yLAeE4h1CJsP9Mm6RYYk7MMnsb",
      amount: 100000,
      capture_type: null,
      client_secret:
        "pi_UDQ5s2yLAeE4h1CJsP9Mm6RYYk7MMnsb_secret_azBhHvfc17JJUDs8yi94KpMbtv56eQ5D",
      currency: "PHP",
      description: "Some description",
      livemode: false,
      metadata: null,
      next_action: null,
      payment_method_id: null,
      payment_methods: ["card", "gcash"],
      payment_method_options: {
        card: {
          capture_type: "automatic",
        },
      },
      status: "awaiting_payment_method",
      return_url: null,
      capture_before_at: null,
      created_at: 1721726975,
      updated_at: 1721726975,
    },
    metadata: null,
    success_url: "http://some-url.com",
    cancel_url: "http://some-url.com",
    payment_methods: ["card", "gcash"],
    description: "Some description",
    submit_type: "pay",
    expires_at: 1721813375,
    created_at: 1721726975,
    updated_at: 1721726975,
  },
};

export default CheckoutSessionFixture;

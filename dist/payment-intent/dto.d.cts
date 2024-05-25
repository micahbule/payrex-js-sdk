type PaymentIntentNextAction = {
    type: string;
    redirect_url: string;
};
declare class PaymentIntentDto {
    id: string;
    resource: string;
    amount: number;
    capture_type: string;
    client_secret: string;
    currency: string;
    description: string;
    livemode: string;
    metadata: Record<string, string> | null;
    next_action: PaymentIntentNextAction;
    payment_methods: string[];
    status: string;
    created_at: number;
    updated_at: number;
    constructor(apiResponse: any);
}

export { PaymentIntentDto as default };

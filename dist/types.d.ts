declare enum PI_PaymentMethods {
    CARD = "card",
    GCASH = "gcash"
}
declare enum PI_CaptureType {
    AUTOMATIC = "automatic",
    CAPTURE = "capture"
}
type CreatePaymentIntentPayload = {
    amount: number;
    payment_methods: PI_PaymentMethods[];
    currency: string;
    capture_type?: PI_CaptureType;
    description?: string;
    metadata?: Record<string, string>;
};

export { type CreatePaymentIntentPayload, PI_CaptureType, PI_PaymentMethods };

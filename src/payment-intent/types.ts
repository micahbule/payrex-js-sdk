export enum PI_PaymentMethods {
  CARD = "card",
  GCASH = "gcash",
}

export enum PI_CaptureType {
  AUTOMATIC = "automatic",
  CAPTURE = "capture",
}

type AvailablePaymentMethods = `${PI_PaymentMethods}`[];

export type CreatePaymentIntentPayload = {
  amount: number;
  payment_methods: AvailablePaymentMethods;
  currency: string;
  capture_type?: PI_CaptureType;
  description?: string;
  metadata?: Record<string, string>;
};

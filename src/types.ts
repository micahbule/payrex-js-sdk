export enum PI_PaymentMethods {
  CARD = "card",
  GCASH = "gcash",
}

export enum PI_CaptureType {
  AUTOMATIC = "automatic",
  CAPTURE = "capture",
}

export type CreatePaymentIntentPayload = {
  amount: number;
  payment_methods: PI_PaymentMethods[];
  currency: string;
  capture_type?: PI_CaptureType;
  description?: string;
  metadata?: Record<string, string>;
};

export type PayrexApiError = {
  code: string;
  detail: string;
  parameter: string;
};

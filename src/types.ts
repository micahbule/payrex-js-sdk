export type PayrexApiError = {
  code: string;
  detail: string;
  parameter: string;
};

export interface BaseService {
  basePath: string;
}

export enum PayrexPaymentMethods {
  CARD = "card",
  GCASH = "gcash",
}

export enum PayrexCardCaptureTypes {
  AUTOMATIC = "automatic",
  MANUAL = "manual",
}

export type PI_PaymentMethods = PayrexPaymentMethods;
export type PI_CaptureType = PayrexCardCaptureTypes;

export type AvailablePaymentMethods = `${PayrexPaymentMethods}`[];

export type PayrexCardPaymentOptions = {
  card: {
    capture_type: PayrexCardCaptureTypes;
    allowed_bins?: number[];
  };
};

export type PayrexPaymentMethodOptions = {};

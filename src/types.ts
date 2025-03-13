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
	MAYA = "maya",
	QRPH = "qrph",
}

export enum PayrexCardCaptureTypes {
	AUTOMATIC = "automatic",
	MANUAL = "manual",
}

export type PI_PaymentMethods = PayrexPaymentMethods;
export type PI_CaptureType = PayrexCardCaptureTypes;

export type AvailablePaymentMethods = `${PayrexPaymentMethods}`[];

export type PayrexPaymentMethodOptions = {
	card: {
		capture_type: `${PayrexCardCaptureTypes}` | string;
		allowed_bins?: string[];
		allowed_funding?: string[];
	};
};

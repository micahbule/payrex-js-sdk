import {
  AvailablePaymentMethods,
  PayrexPaymentMethodOptions,
} from "../types.js";

export type CreatePaymentIntentPayload = {
  amount: number;
  payment_methods: AvailablePaymentMethods;
  currency: string;
  description?: string;
  payment_method_options?: PayrexPaymentMethodOptions;
  statement_descriptor?: string;
  metadata?: Record<string, string>;
};

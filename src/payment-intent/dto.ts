import { AvailablePaymentMethods, PayrexPaymentMethodOptions } from "../types";

type PaymentIntentNextAction = {
  type: string;
  redirect_url: string;
};

export default class PaymentIntentDto {
  id: string;
  resource: string;
  amount: number;
  amount_received: number;
  amount_capturable: number;
  client_secret: string;
  currency: string;
  description: string;
  livemode: string;
  metadata: Record<string, string> | null;
  next_action: PaymentIntentNextAction;
  payment_method_options: PayrexPaymentMethodOptions;
  payment_methods: AvailablePaymentMethods;
  status: string;
  created_at: number;
  updated_at: number;

  constructor(apiResponse: any) {
    this.id = apiResponse.id;
    this.resource = apiResponse.resource;
    this.amount = apiResponse.amount;
    this.amount_received = apiResponse.amount_received;
    this.amount_capturable = apiResponse.amount_capturable;
    this.client_secret = apiResponse.client_secret;
    this.currency = apiResponse.currency;
    this.description = apiResponse.description;
    this.livemode = apiResponse.livemode;
    this.metadata = apiResponse.metadata;
    this.next_action = apiResponse.next_action;
    this.payment_methods = apiResponse.payment_methods;
    this.payment_method_options = apiResponse.payment_method_options;
    this.status = apiResponse.status;
    this.created_at = apiResponse.created_at;
    this.updated_at = apiResponse.updated_at;
  }
}

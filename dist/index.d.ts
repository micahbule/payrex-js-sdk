import PaymentIntentService from './services/payment-intent.js';
import './http.js';
import 'needle';
import './types.js';

declare class PayRexClient {
    paymentIntent: PaymentIntentService;
    constructor(secretApiKey: string);
}

export { PayRexClient as default };

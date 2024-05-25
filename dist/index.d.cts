import PaymentIntentService from './payment-intent/service.cjs';
import './http.cjs';
import 'needle';
import './payment-intent/types.cjs';
import './payment-intent/dto.cjs';

declare class PayRexClient {
    paymentIntent: PaymentIntentService;
    constructor(secretApiKey: string);
}

export { PayRexClient as default };

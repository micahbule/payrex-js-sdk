import PaymentIntentService from './payment-intent/service.cjs';
import RefundService from './refund/service.cjs';
import './http.cjs';
import 'needle';
import './payment-intent/types.cjs';
import './payment-intent/dto.cjs';
import './refund/types.cjs';
import './refund/dto.cjs';

declare class PayRexClient {
    paymentIntent: PaymentIntentService;
    refund: RefundService;
    constructor(secretApiKey: string);
}

export { PayRexClient as default };

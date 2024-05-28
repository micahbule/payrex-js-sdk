import PaymentIntentService from './payment-intent/service.cjs';
import RefundService from './refund/service.cjs';
import WebhookService from './webhooks/service.cjs';
import './http.cjs';
import 'needle';
import './payment-intent/types.cjs';
import './payment-intent/dto.cjs';
import './types.cjs';
import './refund/types.cjs';
import './refund/dto.cjs';
import './webhooks/types.cjs';
import './webhooks/dto.cjs';

declare class PayRexClient {
    paymentIntent: PaymentIntentService;
    refund: RefundService;
    webhook: WebhookService;
    constructor(secretApiKey: string);
}

export { PayRexClient as default };

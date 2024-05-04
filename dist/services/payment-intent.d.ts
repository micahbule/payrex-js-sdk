import HttpClient from '../http.js';
import { CreatePaymentIntentPayload } from '../types.js';
import 'needle';

declare class PaymentIntentService {
    private readonly client;
    private basePath;
    constructor(client: HttpClient);
    create(params: CreatePaymentIntentPayload): Promise<any>;
}

export { PaymentIntentService as default };

import HttpClient from '../http.cjs';
import { CreatePaymentIntentPayload } from './types.cjs';
import PaymentIntentDto from './dto.cjs';
import 'needle';

declare class PaymentIntentService {
    private readonly client;
    private basePath;
    constructor(client: HttpClient);
    create(params: CreatePaymentIntentPayload): Promise<PaymentIntentDto>;
    get(id: string): Promise<PaymentIntentDto>;
    capture(id: string, amount: number): Promise<PaymentIntentDto>;
}

export { PaymentIntentService as default };

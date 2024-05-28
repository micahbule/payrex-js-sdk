import HttpClient from '../http.cjs';
import { CreatePaymentIntentPayload } from './types.cjs';
import PaymentIntentDto from './dto.cjs';
import { BaseService } from '../types.cjs';
import 'needle';

declare class PaymentIntentService implements BaseService {
    private readonly client;
    basePath: string;
    constructor(client: HttpClient);
    create(params: CreatePaymentIntentPayload): Promise<PaymentIntentDto>;
    get(id: string): Promise<PaymentIntentDto>;
    capture(id: string, amount: number): Promise<PaymentIntentDto>;
}

export { PaymentIntentService as default };

import HttpClient from '../http.cjs';
import { CreateRefundPayload } from './types.cjs';
import RefundDto from './dto.cjs';
import 'needle';

declare class RefundService {
    private readonly client;
    private basePath;
    constructor(client: HttpClient);
    create(params: CreateRefundPayload): Promise<RefundDto>;
}

export { RefundService as default };

import HttpClient from '../http.cjs';
import { CreateRefundPayload } from './types.cjs';
import RefundDto from './dto.cjs';
import { BaseService } from '../types.cjs';
import 'needle';

declare class RefundService implements BaseService {
    private readonly client;
    basePath: string;
    constructor(client: HttpClient);
    create(params: CreateRefundPayload): Promise<RefundDto>;
}

export { RefundService as default };

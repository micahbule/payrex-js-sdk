import HttpClient from '../http.cjs';
import { BaseService } from '../types.cjs';
import { CreateWebhookPayload, UpdateWebhookPayload } from './types.cjs';
import WebhookDto from './dto.cjs';
import 'needle';

declare class WebhookService implements BaseService {
    private readonly client;
    basePath: string;
    constructor(client: HttpClient);
    create(params: CreateWebhookPayload): Promise<WebhookDto>;
    get(id?: string): Promise<any>;
    update(params: UpdateWebhookPayload): Promise<WebhookDto>;
    delete(id: string): Promise<WebhookDto>;
    private toggle;
    disable: (id: string) => Promise<WebhookDto>;
    enable: (id: string) => Promise<WebhookDto>;
}

export { WebhookService as default };

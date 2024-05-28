declare class WebhookDto {
    id: string;
    resource: string;
    secret_key: string;
    status: string;
    description: string;
    livemode: boolean;
    url: string;
    events: string[];
    created_at: number;
    updated_at: number;
    constructor(apiResponse: any);
}

export { WebhookDto as default };

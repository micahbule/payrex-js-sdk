declare class RefundDto {
    id: string;
    resource: string;
    amount: number;
    status: string;
    currency: string;
    description: string;
    reason: string;
    remarks: string;
    livemode: string;
    metadata: Record<string, string> | null;
    payment_id: string;
    created_at: number;
    updated_at: number;
    constructor(apiResponse: any);
}

export { RefundDto as default };

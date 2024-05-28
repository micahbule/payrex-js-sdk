type PayrexApiError = {
    code: string;
    detail: string;
    parameter: string;
};
interface BaseService {
    basePath: string;
}

export type { BaseService, PayrexApiError };

export type PayrexApiError = {
  code: string;
  detail: string;
  parameter: string;
};

export interface BaseService {
  basePath: string;
}

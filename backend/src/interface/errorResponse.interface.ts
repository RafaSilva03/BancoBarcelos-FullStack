export interface IErrorResponse {
    code: string;
    message: string;
    status: number;
    details?: Array<{
      type: string;
      message: string;
      field?: string;
      actual?: any;
    }>;
  }
  
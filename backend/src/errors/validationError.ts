import { CustomError } from "./";

class ValidationError extends CustomError {
  public details?: Array<{
    type: string;
    message: string;
    field: string;
    actual: any;
  }>; 

  constructor(code: string, message: string, details?: Array<any>, status: number = 500) {
    super(code, message, status);
    this.details = details; 
  }
}

export { ValidationError };
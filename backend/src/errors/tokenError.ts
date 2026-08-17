import { CustomError } from "./customError";

class TokenError extends CustomError {
  public tokenErrorCode: string;

  constructor(tokenErrorCode: string, message: string, status: number = 403) {
    super("TOKEN_ERROR", message, status);
    this.tokenErrorCode = tokenErrorCode;
  }
}

export { TokenError };
import { Request, Response, NextFunction } from "express";
import { CustomError, TokenError, ValidationError } from "./";
import { IErrorResponse } from "../interface/";

const handleCustomError = (err: CustomError | TokenError, res: Response) => {
  const errorResponse: IErrorResponse = {
    code: err.code,
    message: err.message,
    status: err.status,
  };
  return res.status(errorResponse.status).json({ error: errorResponse });
};

const handleValidateError = (err: ValidationError, res: Response) => {
  const errorResponse: IErrorResponse = {
    code: err.code,
    message: err.message,
    details: err.details,
    status: err.status,
  };
  return res.status(errorResponse.status).json({ error: errorResponse });
};

const handleInternalServerError = (res: Response, details: string) => {
  const errorResponse: IErrorResponse = {
    code: "INTERNAL_SERVER_ERROR",
    message: "Internal server error occurred",
    status: 500,
    details: details,
  };
  return res.status(errorResponse.status).json({ error: errorResponse });
};

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError || err instanceof TokenError) {
    if (err instanceof ValidationError) {
      return handleValidateError(err, res);
    } else {
      return handleCustomError(err, res);
    }
  }

  return handleInternalServerError(res, err.message);
};

export { errorHandler };

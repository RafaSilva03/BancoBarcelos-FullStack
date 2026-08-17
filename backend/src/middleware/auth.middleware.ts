import { Request, Response, NextFunction } from "express";
import jwt, { JsonWebTokenError, NotBeforeError, TokenExpiredError, VerifyErrors } from "jsonwebtoken";
import { jwtSecretCode } from "../config/configurations";
import { IDecodedToken } from "../interface/";
import { TokenError } from "../errors/";

const getToken = (req: Request): string => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    throw new TokenError("NO_TOKEN_PROVIDED", "No token provided", 401);
  }
  const token = authHeader.split(" ")[1];
  return token;
};

const verifyJWT = (req: Request & { decoded?: IDecodedToken }, res: Response, next: NextFunction) => {
  const token = getToken(req);

  jwt.verify(token, jwtSecretCode, (err: VerifyErrors | null, decoded: IDecodedToken | undefined) => {
    if (err) {
      handleTokenError(err);
    }

    if (!decoded) {
      throw new TokenError("INVALID_TOKEN", "Invalid token", 403);
    }

    req.decoded = decoded;
    next();
  });
};

const getTokenData = (token: string): IDecodedToken => {
  try {
    const decoded = jwt.verify(token, jwtSecretCode) as IDecodedToken;
    return decoded;
  } catch (error) {
    handleTokenError(error);
  }
};

const handleTokenError = (error: any) => {
  if (error instanceof JsonWebTokenError) {
    if (error instanceof NotBeforeError) {
      throw new TokenError("TOKEN_NOT_YET_VALID", "Token not yet valid", 403);
    }
    if (error instanceof TokenExpiredError) {
      throw new TokenError("TOKEN_EXPIRED", "Token expired", 403);
    }
    throw new TokenError("INVALID_TOKEN", "Invalid token", 403);
  }
  throw error;
};

const genereateToken = (tokenData: any) => {
  return jwt.sign(tokenData, jwtSecretCode, { expiresIn: "12h" });
};

export { genereateToken, getTokenData, verifyJWT, getToken };

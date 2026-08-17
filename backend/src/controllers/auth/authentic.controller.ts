import { Request, Response, NextFunction } from "express";
import { IResponse } from "../../interface";
import { AuthService } from "../../services/";
import { v4 as uuidv4 } from "uuid";

interface Authentic {
  nif: string;
  password: string;
}

export const authentic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authData: Authentic = parseAuthData(req.body);
    const result = await AuthService.authenticate(authData);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const parseAuthData = (data: Authentic): Authentic => {
  return {
    nif: data.nif,
    password: data.password,
  };
};

import { Request, Response } from "express";
import { IAlive, IResponse } from "../../interface";

export class IsApiAlive {
  static async handle(req: Request, res: Response) {
    const payload: IResponse<IAlive> = {
      status: "success",
      code: 200,
      data: {
        timestamp: new Date().toISOString(),
      },
      description: "The API is alive and responding.",
    };

    res.status(200).json(payload);
  }
}

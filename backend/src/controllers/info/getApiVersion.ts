import { Request, Response } from "express";
import { appConfig } from "../../config/configurations";
import { IGetApiVersion, IResponse } from "../../interface";

export class GetApiVersion {
  static async handle(req: Request, res: Response) {
    const version = appConfig.version || "1.0.0";

    const payload: IResponse<IGetApiVersion> = {
      status: "success",
      code: 200,
      data: {
        title: "Banco Barcelos API",
        description: "This API provides information about Banco Barcelos services and functionality.",
        version: version,
      },
      description: "The API version information has been successfully retrieved.",
    };

    res.status(200).json(payload);
  }
}

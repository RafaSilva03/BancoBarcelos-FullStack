import { User, IResponse } from "../../interface/";
import { authenticate } from "./";


interface Authentic {
    nif: string;
    password: string;
  }

export class AuthService {
  static async authenticate(data: Authentic): Promise<IResponse<string>> {
    return await authenticate(data);
  }
}

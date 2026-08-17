import { user } from "../../models/user";
import { CustomError } from "../../errors/";

export const existUserByNif = async (nif: string) => {
    try {
      const result = await user.findOne({
        where: {
          nif: nif
        }
      });
      return !!result;
    } catch (error: any) {
      throw new CustomError("EXIST_USER_BY_NIF_FAILED", `Failed to get user by nif: ${error.message}`);
    }
  };
  
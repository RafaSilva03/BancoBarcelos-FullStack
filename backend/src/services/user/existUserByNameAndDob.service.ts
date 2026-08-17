import { user } from "../../models/user";
import { CustomError } from "../../errors/";

export const existUserByNameAndDob = async (name:string, dob:string) => {
  try {
    const result = await user.findOne({
      where: {
        name: name,
        dob: dob,
      },
    });
    return !!result;
  } catch (error:any) {
    throw new CustomError("EXIST_USER_BY_NAME_AND_DOB_FAILED", `Failed to check user existence by name and dob: ${error.message}`);
  }
};

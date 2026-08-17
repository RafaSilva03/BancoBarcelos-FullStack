import { account_type } from "../../models/account_type"; 
import { CustomError } from "../../errors/";

export const existAccountTypeById = async (accountTypeId: string): Promise<boolean> => {
  try {
    const result = await account_type.findOne({
      where: {
        id: accountTypeId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_ACCOUNT_TYPE_BY_ID", `Failed to see if account_type id exists: ${error.message}`);
  }
};

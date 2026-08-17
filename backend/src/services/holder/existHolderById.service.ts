import { holder } from "../../models/holder";
import { CustomError } from "../../errors/";

export const existHolderById = async (HolderId: string): Promise<boolean> => {
  try {
    const result = await holder.findOne({
      where: {
        id: HolderId,
      },
    });

    return !!result;
  } catch (error: any) {
    throw new CustomError("EXIST_HOLDER_BY_ID", `Failed to see if holder id exists: ${error.message}`);
  }
};

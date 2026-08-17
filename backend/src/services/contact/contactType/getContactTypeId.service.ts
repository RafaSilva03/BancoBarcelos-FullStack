import { IContactType, IResponse } from "../../../interface/";
import { CustomError } from "../../../errors/";
import { contact_type } from "../../../models/contact_type";

export const getContactTypeId = async (contactType: string): Promise<IResponse<IContactType | void>> => {
  try {
    const result = await contact_type.findOne({
      where: {
        type: contactType,
      },
    });

    return result ? ({ code: 200, status: "success", data: { id: result.id, type: contactType } } as IResponse<IContactType>) : ({ code: 400, status: "error" } as IResponse<void>);
  } catch (error: any) {
    throw new CustomError("GET_CONTACT_TYPE_ID_FAILED", `Failed to get contact type id: ${error.message}`);
  }
};

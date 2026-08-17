import { IContactType, IResponse } from "../../../interface/";
import { CustomError } from "../../../errors/";
import { contact_type } from "../../../models/contact_type";
import { v4 as uuidv4 } from "uuid";

export const createContactType = async (contactType: string): Promise<IResponse<IContactType>> => {
  try {
    const id = uuidv4();

    const payload = await contact_type.create({
      id: id,
      type: contactType,
    });

    return { code: 200, status: "success", data: { id, type: contactType } } as IResponse<IContactType>;
  } catch (error: any) {
    throw new CustomError("CREATE_CONTACT_TYPE_FAILED", `Failed to create contact type: ${error.message}`);
  }
};

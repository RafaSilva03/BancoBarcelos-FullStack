import { ContactTypeService } from "./contactType/contactType.service";
import { IContact, IResponse, IContactType } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from "uuid";
import { contact } from "../../models/contact";

export const createContact = async (userId: string, data: IContact[]): Promise<IResponse<IContact[]>> => {
  try {
    const uniqueContactTypes = [...new Set(data.map((contact) => contact.contact_type))];
    const createdContacts: IContact[] = [];

    for (const type of uniqueContactTypes) {
      const result = await getOrCreateContactType(type);
      if (result.status === "success") {
        const contactId = uuidv4();
        const contactValue = data.find((contact) => contact.contact_type === type)?.contact_value ?? "";

        const contactData = await contact.create({
          id: contactId,
          user_id: userId,
          contact_type_id: result.data.id,
          contact_value: contactValue,
        });
        createdContacts.push({ ...contactData.dataValues, type: type });
      }
    }

    return { code: 200, status: "success", data: createdContacts } as IResponse<IContact[]>;
  } catch (error: any) {
    throw new CustomError("CREATE_CONTACT_FAILED", `Failed to create contact: ${error.message}`, 500);
  }
};

const getOrCreateContactType = async (type: string): Promise<IResponse<IContactType>> => {
  try {
    let result = await ContactTypeService.getContactTypeId(type);
    if (result.status === "error") {
      result = await ContactTypeService.createContactType(type);
    }
    return result;
  } catch (error: any) {
    throw new CustomError("GET_OR_CREATE_CONTACT_TYPE_FAILED", `Failed to get or create contact type: ${error.message}`, 500);
  }
};

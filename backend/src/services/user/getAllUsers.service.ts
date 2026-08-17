import { IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { user } from "../../models/user";
import { postal_code } from "../../models/postal_code";
import { status } from "../../models/status";
import { sex_type } from "../../models/sex_type";
import { pronoun } from "../../models/pronoun";
import { contact } from "../../models/contact";
import { contact_type } from "../../models/contact_type";

export const getAllUsers = async (): Promise<IResponse<any>> => {
  try {
    const allUsersData = await user.findAll({
      include: [
        { model: status, as: "status", attributes: ["id", "status"] },
        { model: postal_code, as: "postal_code", attributes: ["id", "code", "location"] },
        { model: sex_type, as: "sex_type", attributes: ["id", "type"] },
        { model: pronoun, as: "pronoun", attributes: ["id", "name"] },
        { model: contact, as: "contacts", attributes: ["id", "contact_value"], include: [{ model: contact_type, as: "contact_type", attributes: ["id", "type"] }] },
      ],
    });

    if (allUsersData.length > 0) {
      const users = allUsersData.map((userData) => ({
        id: userData.id,
        name: userData.name,
        pictureName: userData.picture_name,
        dob: userData.dob,
        address: userData.address,
        registrationDate: userData.registration_date,
        nif: userData.nif,
        status: { ...userData.status.dataValues },
        postalCode: { ...userData.postal_code.dataValues },
        sexType: { ...userData.sex_type.dataValues },
        pronoun: { ...userData.pronoun.dataValues },
        contacts: userData.contacts.map((contactData) => ({
          id: contactData.id,
          contact_value: contactData.contact_value,
          contact_type: { ...contactData.contact_type.dataValues },
        })),
      }));
      return { code: 200, status: "success", description: "Users data retrieved", data: users } as IResponse<void>;
    }
    return { code: 404, status: "error", description: "No users found" } as IResponse<void>;
  } catch (error: any) {
    throw new CustomError("GET_ALL_USERS", `Failed to get all users: ${error.message}`);
  }
};

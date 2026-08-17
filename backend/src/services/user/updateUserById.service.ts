import { IResponse } from "../../interface/";
import { CustomError } from "../../errors/";

import { PronounService, SexTypeService, PostalCodeService } from "../";
import { user } from "../../models/user";
import { postal_code } from "../../models/postal_code";

interface Temp {
  pronoun_id?: string;
  sex_type_id?: string;
  address?: string;
  postal_code_id?: string;
  picture_name?: string;
}

export const updateUserById = async (data: any): Promise<IResponse<any>> => {
  try {
    const existingUser = await user.findOne({ where: { id: data.userId } });
    if (!existingUser) {
      return { code: 404, status: "error", details: "User not found" } as IResponse<void>;
    }

    let temp: Temp = {};

    if (data.pronoun_id && data.pronoun_id !== existingUser.pronoun_id) {
      if ((await PronounService.existPronounById(data.pronoun_id)) === false) {
        return {
          status: "error",
          code: 404,
          description: "Invalid pronoun id",
        };
      }
      temp.pronoun_id = data.pronoun_id;
    }
    if (data.sex_type_id && data.sex_type_id !== existingUser.sex_type_id) {
      if ((await SexTypeService.existSexTypeById(data.sex_type_id)) === false) {
        return {
          status: "error",
          code: 404,
          description: "Invalid sex type id",
        };
      }
      temp.sex_type_id = data.sex_type_id;
    }

    if (data.address && data.address !== existingUser.address) {
      temp.address = data.address;
    }

    let postalCodeId;
    if (data.postal_code) {
      postalCodeId = await getPostalCodeId(data.postal_code);
      if (postalCodeId.data.id !== existingUser.postal_code_id) {
        temp.postal_code_id = postalCodeId.data.id;
      }
    }

    if (temp.address || temp.postal_code_id || temp.sex_type_id || temp.pronoun_id) {
      const result = await user.update(temp, { where: { id: data.userId } });

      if (postalCodeId.data.id !== existingUser.postal_code_id) {
        try {
          const update = await postal_code.destroy({ where: { id: existingUser.postal_code_id } });
        } catch (error: any) {}
      }

      return { code: 200, status: "success", description: "User data updated", data: temp } as any;
    }

    return { code: 200, status: "error", details: "No data provided" } as IResponse<any>;
  } catch (error: any) {
    throw new CustomError("UPDATE_USER_BY_ID", `Failed to update user data: ${error.message}`);
  }
};

const getPostalCodeId = async (postalCode: any) => {
  let result = await PostalCodeService.getPostalCodeId(postalCode.code);
  if (result.status === "error") {
    result = await PostalCodeService.createPostalCode({ code: postalCode.code, location: postalCode.location });
  }
  return result;
};

import { User, IResponse } from "../../interface/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import Bcrypt from "../../bcrypt/bcrypt.hash";
import { UserService, PronounService, SexTypeService, PostalCodeService, StatusService, ContactService } from "../";
import { user } from "../../models/user";

export const createUser = async (user: User.ParsedUser): Promise<IResponse<User.ResponseUser>> => {
  if (await UserService.existUserByNif(user.nif)) {
    return {
      status: "error",
      code: 400,
      description: "User with this NIF already exists.",
    };
  }

  if (await UserService.existUserByNameAndDob(user.name, user.dob)) {
    return {
      status: "error",
      code: 400,
      description: "User with this name and date of birth already exists.",
    };
  }

  if ((await StatusService.existStatusById(user.status_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid status id",
    };
  }

  if ((await PronounService.existPronounById(user.pronoun_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid pronoun id",
    };
  }

  if ((await SexTypeService.existSexTypeById(user.sex_type_id)) === false) {
    return {
      status: "error",
      code: 404,
      description: "Invalid sex type id",
    };
  }

  const { pronoun_id, sex_type_id, postal_code, status_id, contacts, nif, password } = user;

  try {
    const postalCodeId = await getPostalCodeId(postal_code);
    const userId = uuidv4();
    const hashedPassword = await Bcrypt.getPasswordHash(password);
    const payloadData = buildPayloadData(user, postalCodeId, userId, hashedPassword);

    await insertUser(payloadData);

    const contactsData = await ContactService.createContact(userId, contacts);
    payloadData.contacts = contactsData.data;
    delete payloadData.hashed_password;

    console.log(payloadData)

    return {
      status: "success",
      code: 201,
      description: "User created successfully.",
      data: payloadData,
    };
  } catch (error: any) {
    throw new CustomError("CREATE_USER_FAILED", `Failed to create user: ${error.message}`);
  }
};

const getPostalCodeId = async (postalCode: any) => {
  let result = await PostalCodeService.getPostalCodeId(postalCode.code);
  if (result.status === "error") {
    result = await PostalCodeService.createPostalCode({ code: postalCode.code, location: postalCode.location });
  }
  return result;
};

const insertUser = async (payloadData: any) => {
  let userObj = { ...payloadData };

  userObj.postal_code_id = userObj.postal_code.id;
  delete userObj.postal_code;

  const payload = await user.create(userObj);
};

const buildPayloadData = (user: User.ParsedUser, postalCode: any, userId: string, hashed_password: string): any => {
  return {
    id: userId,
    name: user.name,
    pronoun_id: user.pronoun_id,
    picture_name: user.picture_name,
    dob: user.dob,
    address: user.address,
    postal_code: { id: postalCode.data.id, code: user.postal_code.code, location: user.postal_code.location },
    status_id: user.status_id,
    sex_type_id: user.sex_type_id,
    nif: user.nif,
    hashed_password: hashed_password,
    registration_date: new Date().toISOString(),
  };
};

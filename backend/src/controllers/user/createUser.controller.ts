import { Request, Response, NextFunction } from "express";
import { User, IResponse } from "../../interface";
import { validateData } from "../../validator/data.validator";
import { UserService } from "../../services/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.file) {
      req.body.imageUUID = req.file.filename;
    } else {
      throw new CustomError("UPLOAD_IMAGE_FAILED", "An image are required", 404);
    }

    const userData: User.ParsedUser = parseUserData(req.body, req.body.imageUUID);
    await validateData(userData, getUserSchema());
    const result = await UserService.createUser(userData);
    res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const parseUserData = (data: any, picture: string): User.ParsedUser => {
  return {
    name: data.name,
    pronoun_id: data.pronoun_id,
    picture_name: picture,
    dob: new Date(data.dob).toISOString(),
    address: data.address,
    sex_type_id: data.sex_type_id,
    postal_code: {
      code: data.postal_code.code,
      location: data.postal_code.location,
    },
    contacts: data.contacts.map((contact: any) => ({
      contact_type: contact.contact_type,
      contact_value: contact.contact_value,
    })),
    status_id: data.status_id,
    nif: data.nif,
    password: data.password,
  };
};


const getUserSchema = (): any => {
  return {
    name: { type: "string", empty: false, max: 100 },
    pronoun_id: { type: "uuid", empty: false },
    dob: { type: "date", empty: false, convert: true },
    address: { type: "string", empty: false, max: 255 },
    sex_type_id: { type: "uuid", empty: false },
    postal_code: {
      type: "object",
      props: {
        code: { type: "string", empty: false, pattern: /^\d{4}-\d{3}$/ },
        location: { type: "string", empty: false },
      },
    },
    contacts: {
      type: "array",
      items: {
        type: "object",
        props: {
          contact_type: { type: "string", empty: false, max: 25 },
          contact_value: { type: "string", empty: false, max: 50 },
        },
      },
    },
    status_id: { type: "uuid", empty: false },
    nif: { type: "string", empty: false, max: 10 },
    password: { type: "string", empty: false, max: 100 },
  };
};

import Validator from "fastest-validator";
import { ValidationError, CustomError } from "../errors/";

const validator = new Validator();

class ValidateDataType {
  static async validate(data: any, schema: any): Promise<boolean | object[]> {
    console.log(data)
    console.log(schema)
    try {
      const validationResult = await validator.validate(data, schema);
      if (validationResult !== true) {
        return validationResult;
      }

      return true;
    } catch (error) {
      throw new ValidationError("VALIDATION_ERROR", "An error occurred during validation.", undefined, 400);
    }
  }
}

export const validateData = async (data: any, dataFormat: any): Promise<void> => {
  const validationResult = await ValidateDataType.validate(data, dataFormat);

  if (Array.isArray(validationResult)) {
    throw new ValidationError("VALIDATION_ERROR", "Validation failed", validationResult, 400);
  }
};

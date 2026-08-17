import { IResponse } from "../../interface/";
import { v4 as uuidv4 } from "uuid";
import { CustomError } from "../../errors/";
import { BankAccountService } from "../";
import { generated_code } from "../../models/generated_code";
import { haveEnoughBalanceTowithdraw } from "../transfer/transferTransaction.service";

export const createCode = async (data: any): Promise<IResponse<any>> => {
  try {

    if ((await BankAccountService.existBankAccountById(data.account_number_id)) === false) {
      return {
        status: "error",
        code: 400,
        description: "Account number id invalid",
      };
    }

    const haveBalance = await haveEnoughBalanceTowithdraw(data.account_number_id, data.ammount);

    if (!haveBalance) {
      return {
        status: "error",
        code: 403,
        description: "Insufficient balance to complete the transfer.",
      };
    }

    const result = await createGeneratedCode(data);

    if (result) {
      return { code: 200, status: "success", data: result };
    }
  } catch (error: any) {
    throw new CustomError("CREATE_USER_FAILED", `Failed to create user: ${error.message}`);
  }
};

const createGeneratedCode = async (data: any): Promise<any> => {
  console.log("huee");
  const id = uuidv4();
  const code = generateRandomCode();
  let obj = { id: id, code: code, ...data };
  await generated_code.create(obj);

  return obj;
};

const generateRandomCode = (): string => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let code = "BBA-";

  for (let i = 0; i < 3; i++) {
    code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  code += "-";

  for (let i = 0; i < 3; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return code;
};

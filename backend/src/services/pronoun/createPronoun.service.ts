import { pronoun } from '../../models/pronoun';
import { IPronoun, IResponse } from "../../interface/";
import { CustomError } from "../../errors/";
import { v4 as uuidv4 } from 'uuid';

export const createPronoun = async (pronounName: string): Promise<IResponse<IPronoun>> => {
  try {
    const id = uuidv4();
    const payload = await pronoun.create({
      id: id,
      name: pronounName
    });
    return { code: 200, status: "success", data: { id, pronounName } } as IResponse<IPronoun>;
  } catch (error: any) {
    throw new CustomError("CREATE_PRONOUN_FAILED", `Failed to create pronoun: ${error.message}`);
  }
};
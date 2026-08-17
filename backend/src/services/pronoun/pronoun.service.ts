import { IResponse, IPronoun } from "../../interface/";
import { createPronoun, getPronounId, existPronounById } from "./";

export class PronounService {
  static async getPronounId(pronoun: string): Promise<IResponse<IPronoun | void>> {
    return await getPronounId(pronoun);
  }

  static async createPronoun(data: IPronoun): Promise<IResponse<IPronoun>> {
    return await createPronoun(data);
  }

  static async existPronounById(pronounId: string): Promise<boolean> {
    return await existPronounById(pronounId)
  }
}
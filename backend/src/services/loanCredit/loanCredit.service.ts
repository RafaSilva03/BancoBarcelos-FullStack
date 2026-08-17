import { ILoanCredit, IResponse} from "../../interface/";   
import { createLoanCredit, getLoanCreditById, getAllLoanCredits, existLoanCreditByBankAccount, existLoanCreditById } from "./";


export class LoanCreditService{
    static async createLoanCredit(data: ILoanCredit.ParsedLoanCredit): Promise<IResponse<ILoanCredit>>{
        return await createLoanCredit(data);
    }

    static async getLoanCreditById(loanCreditId: string): Promise<IResponse<ILoanCredit>>{
        return await getLoanCreditById(loanCreditId);
    }

    static async getAllLoanCredits(): Promise<IResponse<ILoanCredit>>{
        return await getAllLoanCredits();
    }

    static async existLoanCreditByBankAccount(bankAccountNnumber: string): Promise<IResponse<ILoanCredit>>{
        return await existLoanCreditByBankAccount(bankAccountNnumber);
    }

    static async existLoanCreditById(loanCreditId: string): Promise<IResponse<ILoanCredit>>{
        return await existLoanCreditById(loanCreditId);
    }
}

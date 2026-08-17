import { ICreditPayment, IResponse} from "../../interface/";   
import { createCreditPayment /*, endLoanCredit */, getCreditPaymentById, getAllCreditPayments, getCreditPaymentsFromLoanCredit, getTotalPaymentsForLoanCredit /*, existLoanCreditByBankAccount */ } from "./";


export class CreditPaymentService{
    static async createCreditPayment(data: ICreditPayment.ParsedCreditPayment): Promise<IResponse<ICreditPayment>>{
        return await createCreditPayment(data);
    }

    /*static async endLoanCredit(data: string, Id:string): Promise<IResponse<ILoanCredit>>{
        return await endLoanCredit(data, Id);
    }*/

    static async getCreditPaymentById(loanCreditId: string): Promise<IResponse<ICreditPayment>>{
        return await getCreditPaymentById(loanCreditId);
    }

    static async getAllCreditPayments(): Promise<IResponse<ICreditPayment>>{
        return await getAllCreditPayments();
    }

    static async getCreditPaymentsFromLoanCredit(loanCreditId: string): Promise<IResponse<ICreditPayment>>{
        return await getCreditPaymentsFromLoanCredit(loanCreditId);
    }

    static async getTotalPaymentsForLoanCredit(loanCreditId: string): Promise<number>{
        return await getTotalPaymentsForLoanCredit(loanCreditId);
    }

    /*static async existLoanCreditByBankAccount(bankAccountNnumber: string): Promise<IResponse<ILoanCredit>>{
        return await existLoanCreditByBankAccount(bankAccountNnumber);
    }*/
}

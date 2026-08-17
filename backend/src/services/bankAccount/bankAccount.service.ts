import { BankAccount,IWithdrawalDeposit, IResponse} from "../../interface/";   
import { createBankAccount, existBankAccountById, deleteBankAccount, getBankAccountById, getAllBankAccounts, Deposit, Withdrawal, Balance, existBalance} from "./";

export class BankAccountService{
    static async createBankAccount(data: BankAccount.ParsedBankAccount): Promise<IResponse<BankAccount.ResponseBankAccount>>{
        return await createBankAccount(data);
    }

    static async existBankAccountById(iban: string): Promise<boolean>{
        return await existBankAccountById(iban);
    }
    
    static async deleteBankAccount(data: BankAccount.DeleteBankAccount, Id:string): Promise<IResponse<BankAccount.ResponseBankAccount>>{
        return await deleteBankAccount(data, Id);
    }

    static async getBankAccountById(id: string): Promise<IResponse<BankAccount.ResponseBankAccount>>{
        return await getBankAccountById(id);
    }

    static async getAllBankAccounts(): Promise<IResponse<any>>{
        return await getAllBankAccounts();
    }

    
    static async Deposit(data: IWithdrawalDeposit): Promise<IResponse<IWithdrawalDeposit>>{
        return await Deposit(data);
    }

    static async Withdrawal(data: any): Promise<IResponse<IWithdrawalDeposit>>{
        return await Withdrawal(data);
    }

    static async existBalance(data: any): Promise<IResponse<any>>{
        return await existBalance(data); 
    }
}

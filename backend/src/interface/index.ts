import * as User from "./user.interface"
import * from "./info.interface";
import * from "./sexType.interface"
import * from "./pronoun.interface"
import * from "./errorResponse.interface"
import * from "./postalCode.interface"
import * from "./status.interface"
import * from "./contact.interface"
import * from "./response.interface"
import * from "./env.interface"
import * from "./decodedToken.interface"
import * from "./insurance.interface"
import * from "./insuranceType.interface"
import * as BankAccount from "./bankAccount.interface"
import * from "./accountType.interface"
import * from "./periodType.interface"
import * from "./balanceHistory.interface"
import * as RecurringTransfer from "./recurringTransfer.interface"
import * from "./loanCredit.interface"
import * from "./loanCreditType.interface"
import * from "./cardType.interface"
import * from "./card.interface"
import * from "./creditPayment.interface"
import * from "./withdrawal-deposit.interface"
import * as Transfer from "./transfer.interface"
import * from "./check.interface"
import * from "./checkType.interface"
import * from "./bankAccountMovements.interface";
import * from "./tableName.interface"
import * from "./holder.interface"


export {
    IGetApiVersion, 
    IAlive, 
    User, 
    IResponse, 
    ISexType, 
    IPronoun, 
    IErrorResponse, 
    IPostalCode, 
    IStatus, 
    IContact, 
    IContactType,
    IResponse,
    IEnvConfig,
    IDecodedToken,
    ILoanCredit, ILoanCreditType,
    ICreditPayment,
    BankAccount, IAccountType,
    IInsurance, IInsuranceType,
    ICard,ICardType
    Transfer
    RecurringTransfer, IPeriodType, IBalanceHistory,
    ICheck, ICheckType
    IWithdrawalDeposit,
    IBankAccountMovements,
    ITableName,
    IHolder
};

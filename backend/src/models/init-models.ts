import type { Sequelize } from "sequelize";
import { account_card_connector as _account_card_connector } from "./account_card_connector";
import type { account_card_connectorAttributes, account_card_connectorCreationAttributes } from "./account_card_connector";
import { account_notifications as _account_notifications } from "./account_notifications";
import type { account_notificationsAttributes, account_notificationsCreationAttributes } from "./account_notifications";
import { account_type as _account_type } from "./account_type";
import type { account_typeAttributes, account_typeCreationAttributes } from "./account_type";
import { action as _action } from "./action";
import type { actionAttributes, actionCreationAttributes } from "./action";
import { agencies as _agencies } from "./agencies";
import type { agenciesAttributes, agenciesCreationAttributes } from "./agencies";
import { balance_history as _balance_history } from "./balance_history";
import type { balance_historyAttributes, balance_historyCreationAttributes } from "./balance_history";
import { bank_account as _bank_account } from "./bank_account";
import type { bank_accountAttributes, bank_accountCreationAttributes } from "./bank_account";
import { bank_account_movements as _bank_account_movements } from "./bank_account_movements";
import type { bank_account_movementsAttributes, bank_account_movementsCreationAttributes } from "./bank_account_movements";
import { card as _card } from "./card";
import type { cardAttributes, cardCreationAttributes } from "./card";
import { card_type as _card_type } from "./card_type";
import type { card_typeAttributes, card_typeCreationAttributes } from "./card_type";
import { check_type as _check_type } from "./check_type";
import type { check_typeAttributes, check_typeCreationAttributes } from "./check_type";
import { checks as _checks } from "./checks";
import type { checksAttributes, checksCreationAttributes } from "./checks";
import { contact as _contact } from "./contact";
import type { contactAttributes, contactCreationAttributes } from "./contact";
import { contact_type as _contact_type } from "./contact_type";
import type { contact_typeAttributes, contact_typeCreationAttributes } from "./contact_type";
import { credit_payment as _credit_payment } from "./credit_payment";
import type { credit_paymentAttributes, credit_paymentCreationAttributes } from "./credit_payment";
import { department as _department } from "./department";
import type { departmentAttributes, departmentCreationAttributes } from "./department";
import { employee as _employee } from "./employee";
import type { employeeAttributes, employeeCreationAttributes } from "./employee";
import { employees_agencies as _employees_agencies } from "./employees_agencies";
import type { employees_agenciesAttributes, employees_agenciesCreationAttributes } from "./employees_agencies";
import { generated_code as _generated_code } from "./generated_code";
import type { generated_codeAttributes, generated_codeCreationAttributes } from "./generated_code";
import { holder as _holder } from "./holder";
import type { holderAttributes, holderCreationAttributes } from "./holder";
import { insurance as _insurance } from "./insurance";
import type { insuranceAttributes, insuranceCreationAttributes } from "./insurance";
import { insurance_account_connector as _insurance_account_connector } from "./insurance_account_connector";
import type { insurance_account_connectorAttributes, insurance_account_connectorCreationAttributes } from "./insurance_account_connector";
import { insurance_members as _insurance_members } from "./insurance_members";
import type { insurance_membersAttributes, insurance_membersCreationAttributes } from "./insurance_members";
import { insurance_type as _insurance_type } from "./insurance_type";
import type { insurance_typeAttributes, insurance_typeCreationAttributes } from "./insurance_type";
import { loan_credit as _loan_credit } from "./loan_credit";
import type { loan_creditAttributes, loan_creditCreationAttributes } from "./loan_credit";
import { loan_credit_type as _loan_credit_type } from "./loan_credit_type";
import type { loan_credit_typeAttributes, loan_credit_typeCreationAttributes } from "./loan_credit_type";
import { logs as _logs } from "./logs";
import type { logsAttributes, logsCreationAttributes } from "./logs";
import { period_type as _period_type } from "./period_type";
import type { period_typeAttributes, period_typeCreationAttributes } from "./period_type";
import { postal_code as _postal_code } from "./postal_code";
import type { postal_codeAttributes, postal_codeCreationAttributes } from "./postal_code";
import { privileges as _privileges } from "./privileges";
import type { privilegesAttributes, privilegesCreationAttributes } from "./privileges";
import { pronoun as _pronoun } from "./pronoun";
import type { pronounAttributes, pronounCreationAttributes } from "./pronoun";
import { recurring_transfer as _recurring_transfer } from "./recurring_transfer";
import type { recurring_transferAttributes, recurring_transferCreationAttributes } from "./recurring_transfer";
import { role as _role } from "./role";
import type { roleAttributes, roleCreationAttributes } from "./role";
import { sex_type as _sex_type } from "./sex_type";
import type { sex_typeAttributes, sex_typeCreationAttributes } from "./sex_type";
import { status as _status } from "./status";
import type { statusAttributes, statusCreationAttributes } from "./status";
import { table_name as _table_name } from "./table_name";
import type { table_nameAttributes, table_nameCreationAttributes } from "./table_name";
import { transfer as _transfer } from "./transfer";
import type { transferAttributes, transferCreationAttributes } from "./transfer";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";
import { user_bank_connector as _user_bank_connector } from "./user_bank_connector";
import type { user_bank_connectorAttributes, user_bank_connectorCreationAttributes } from "./user_bank_connector";
import { user_privileges as _user_privileges } from "./user_privileges";
import type { user_privilegesAttributes, user_privilegesCreationAttributes } from "./user_privileges";
import { withdraw_deposit_atm as _withdraw_deposit_atm } from "./withdraw_deposit_atm";
import type { withdraw_deposit_atmAttributes, withdraw_deposit_atmCreationAttributes } from "./withdraw_deposit_atm";

export {
  _account_card_connector as account_card_connector,
  _account_notifications as account_notifications,
  _account_type as account_type,
  _action as action,
  _agencies as agencies,
  _balance_history as balance_history,
  _bank_account as bank_account,
  _bank_account_movements as bank_account_movements,
  _card as card,
  _card_type as card_type,
  _check_type as check_type,
  _checks as checks,
  _contact as contact,
  _contact_type as contact_type,
  _credit_payment as credit_payment,
  _department as department,
  _employee as employee,
  _employees_agencies as employees_agencies,
  _generated_code as generated_code,
  _holder as holder,
  _insurance as insurance,
  _insurance_account_connector as insurance_account_connector,
  _insurance_members as insurance_members,
  _insurance_type as insurance_type,
  _loan_credit as loan_credit,
  _loan_credit_type as loan_credit_type,
  _logs as logs,
  _period_type as period_type,
  _postal_code as postal_code,
  _privileges as privileges,
  _pronoun as pronoun,
  _recurring_transfer as recurring_transfer,
  _role as role,
  _sex_type as sex_type,
  _status as status,
  _table_name as table_name,
  _transfer as transfer,
  _user as user,
  _user_bank_connector as user_bank_connector,
  _user_privileges as user_privileges,
  _withdraw_deposit_atm as withdraw_deposit_atm,
};

export type {
  account_card_connectorAttributes,
  account_card_connectorCreationAttributes,
  account_notificationsAttributes,
  account_notificationsCreationAttributes,
  account_typeAttributes,
  account_typeCreationAttributes,
  actionAttributes,
  actionCreationAttributes,
  agenciesAttributes,
  agenciesCreationAttributes,
  balance_historyAttributes,
  balance_historyCreationAttributes,
  bank_accountAttributes,
  bank_accountCreationAttributes,
  bank_account_movementsAttributes,
  bank_account_movementsCreationAttributes,
  cardAttributes,
  cardCreationAttributes,
  card_typeAttributes,
  card_typeCreationAttributes,
  check_typeAttributes,
  check_typeCreationAttributes,
  checksAttributes,
  checksCreationAttributes,
  contactAttributes,
  contactCreationAttributes,
  contact_typeAttributes,
  contact_typeCreationAttributes,
  credit_paymentAttributes,
  credit_paymentCreationAttributes,
  departmentAttributes,
  departmentCreationAttributes,
  employeeAttributes,
  employeeCreationAttributes,
  employees_agenciesAttributes,
  employees_agenciesCreationAttributes,
  generated_codeAttributes,
  generated_codeCreationAttributes,
  holderAttributes,
  holderCreationAttributes,
  insuranceAttributes,
  insuranceCreationAttributes,
  insurance_account_connectorAttributes,
  insurance_account_connectorCreationAttributes,
  insurance_membersAttributes,
  insurance_membersCreationAttributes,
  insurance_typeAttributes,
  insurance_typeCreationAttributes,
  loan_creditAttributes,
  loan_creditCreationAttributes,
  loan_credit_typeAttributes,
  loan_credit_typeCreationAttributes,
  logsAttributes,
  logsCreationAttributes,
  period_typeAttributes,
  period_typeCreationAttributes,
  postal_codeAttributes,
  postal_codeCreationAttributes,
  privilegesAttributes,
  privilegesCreationAttributes,
  pronounAttributes,
  pronounCreationAttributes,
  recurring_transferAttributes,
  recurring_transferCreationAttributes,
  roleAttributes,
  roleCreationAttributes,
  sex_typeAttributes,
  sex_typeCreationAttributes,
  statusAttributes,
  statusCreationAttributes,
  table_nameAttributes,
  table_nameCreationAttributes,
  transferAttributes,
  transferCreationAttributes,
  userAttributes,
  userCreationAttributes,
  user_bank_connectorAttributes,
  user_bank_connectorCreationAttributes,
  user_privilegesAttributes,
  user_privilegesCreationAttributes,
  withdraw_deposit_atmAttributes,
  withdraw_deposit_atmCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const account_card_connector = _account_card_connector.initModel(sequelize);
  const account_notifications = _account_notifications.initModel(sequelize);
  const account_type = _account_type.initModel(sequelize);
  const action = _action.initModel(sequelize);
  const agencies = _agencies.initModel(sequelize);
  const balance_history = _balance_history.initModel(sequelize);
  const bank_account = _bank_account.initModel(sequelize);
  const bank_account_movements = _bank_account_movements.initModel(sequelize);
  const card = _card.initModel(sequelize);
  const card_type = _card_type.initModel(sequelize);
  const check_type = _check_type.initModel(sequelize);
  const checks = _checks.initModel(sequelize);
  const contact = _contact.initModel(sequelize);
  const contact_type = _contact_type.initModel(sequelize);
  const credit_payment = _credit_payment.initModel(sequelize);
  const department = _department.initModel(sequelize);
  const employee = _employee.initModel(sequelize);
  const employees_agencies = _employees_agencies.initModel(sequelize);
  const generated_code = _generated_code.initModel(sequelize);
  const holder = _holder.initModel(sequelize);
  const insurance = _insurance.initModel(sequelize);
  const insurance_account_connector = _insurance_account_connector.initModel(sequelize);
  const insurance_members = _insurance_members.initModel(sequelize);
  const insurance_type = _insurance_type.initModel(sequelize);
  const loan_credit = _loan_credit.initModel(sequelize);
  const loan_credit_type = _loan_credit_type.initModel(sequelize);
  const logs = _logs.initModel(sequelize);
  const period_type = _period_type.initModel(sequelize);
  const postal_code = _postal_code.initModel(sequelize);
  const privileges = _privileges.initModel(sequelize);
  const pronoun = _pronoun.initModel(sequelize);
  const recurring_transfer = _recurring_transfer.initModel(sequelize);
  const role = _role.initModel(sequelize);
  const sex_type = _sex_type.initModel(sequelize);
  const status = _status.initModel(sequelize);
  const table_name = _table_name.initModel(sequelize);
  const transfer = _transfer.initModel(sequelize);
  const user = _user.initModel(sequelize);
  const user_bank_connector = _user_bank_connector.initModel(sequelize);
  const user_privileges = _user_privileges.initModel(sequelize);
  const withdraw_deposit_atm = _withdraw_deposit_atm.initModel(sequelize);

  bank_account.belongsTo(account_type, { as: "account_type", foreignKey: "account_type_id"});
  account_type.hasMany(bank_account, { as: "bank_accounts", foreignKey: "account_type_id"});
  logs.belongsTo(action, { as: "action", foreignKey: "action_id"});
  action.hasMany(logs, { as: "logs", foreignKey: "action_id"});
  employees_agencies.belongsTo(agencies, { as: "agencie", foreignKey: "agencie_id"});
  agencies.hasMany(employees_agencies, { as: "employees_agencies", foreignKey: "agencie_id"});
  bank_account_movements.belongsTo(balance_history, { as: "balance_history", foreignKey: "balance_history_id"});
  balance_history.hasMany(bank_account_movements, { as: "bank_account_movements", foreignKey: "balance_history_id"});
  account_card_connector.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(account_card_connector, { as: "account_card_connectors", foreignKey: "account_number_id"});
  account_notifications.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(account_notifications, { as: "account_notifications", foreignKey: "account_number_id"});
  bank_account_movements.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(bank_account_movements, { as: "bank_account_movements", foreignKey: "account_number_id"});
  checks.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(checks, { as: "checks", foreignKey: "account_number_id"});
  generated_code.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(generated_code, { as: "generated_codes", foreignKey: "account_number_id"});
  insurance_account_connector.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(insurance_account_connector, { as: "insurance_account_connectors", foreignKey: "account_number_id"});
  loan_credit.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(loan_credit, { as: "loan_credits", foreignKey: "account_number_id"});
  recurring_transfer.belongsTo(bank_account, { as: "destination_account", foreignKey: "destination_account_id"});
  bank_account.hasMany(recurring_transfer, { as: "recurring_transfers", foreignKey: "destination_account_id"});
  recurring_transfer.belongsTo(bank_account, { as: "source_account", foreignKey: "source_account_id"});
  bank_account.hasMany(recurring_transfer, { as: "source_account_recurring_transfers", foreignKey: "source_account_id"});
  user_bank_connector.belongsTo(bank_account, { as: "account_number", foreignKey: "account_number_id"});
  bank_account.hasMany(user_bank_connector, { as: "user_bank_connectors", foreignKey: "account_number_id"});
  account_card_connector.belongsTo(card, { as: "card", foreignKey: "card_id"});
  card.hasMany(account_card_connector, { as: "account_card_connectors", foreignKey: "card_id"});
  card.belongsTo(card_type, { as: "card_type", foreignKey: "card_type_id"});
  card_type.hasMany(card, { as: "cards", foreignKey: "card_type_id"});
  checks.belongsTo(check_type, { as: "check_type", foreignKey: "check_type_id"});
  check_type.hasMany(checks, { as: "checks", foreignKey: "check_type_id"});
  agencies.belongsTo(contact, { as: "contact", foreignKey: "contact_id"});
  contact.hasMany(agencies, { as: "agencies", foreignKey: "contact_id"});
  contact.belongsTo(contact_type, { as: "contact_type", foreignKey: "contact_type_id"});
  contact_type.hasMany(contact, { as: "contacts", foreignKey: "contact_type_id"});
  role.belongsTo(department, { as: "department", foreignKey: "department_id"});
  department.hasMany(role, { as: "roles", foreignKey: "department_id"});
  bank_account_movements.belongsTo(generated_code, { as: "movement", foreignKey: "movement_id"});
  generated_code.hasMany(bank_account_movements, { as: "bank_account_movements", foreignKey: "movement_id"});
  user_bank_connector.belongsTo(holder, { as: "holder", foreignKey: "holder_id"});
  holder.hasMany(user_bank_connector, { as: "user_bank_connectors", foreignKey: "holder_id"});
  insurance_account_connector.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_account_connector, { as: "insurance_account_connectors", foreignKey: "insurance_id"});
  insurance_members.belongsTo(insurance, { as: "insurance", foreignKey: "insurance_id"});
  insurance.hasMany(insurance_members, { as: "insurance_members", foreignKey: "insurance_id"});
  insurance.belongsTo(insurance_type, { as: "insurance_type", foreignKey: "insurance_type_id"});
  insurance_type.hasMany(insurance, { as: "insurances", foreignKey: "insurance_type_id"});
  credit_payment.belongsTo(loan_credit, { as: "loan_credit", foreignKey: "loan_credit_id"});
  loan_credit.hasMany(credit_payment, { as: "credit_payments", foreignKey: "loan_credit_id"});
  loan_credit.belongsTo(loan_credit_type, { as: "loan_credit_type", foreignKey: "loan_credit_type_id"});
  loan_credit_type.hasMany(loan_credit, { as: "loan_credits", foreignKey: "loan_credit_type_id"});
  recurring_transfer.belongsTo(period_type, { as: "period_type", foreignKey: "period_type_id"});
  period_type.hasMany(recurring_transfer, { as: "recurring_transfers", foreignKey: "period_type_id"});
  agencies.belongsTo(postal_code, { as: "postal_code", foreignKey: "postal_code_id"});
  postal_code.hasMany(agencies, { as: "agencies", foreignKey: "postal_code_id"});
  user.belongsTo(postal_code, { as: "postal_code", foreignKey: "postal_code_id"});
  postal_code.hasMany(user, { as: "users", foreignKey: "postal_code_id"});
  user_privileges.belongsTo(privileges, { as: "privilege", foreignKey: "privilege_id"});
  privileges.hasMany(user_privileges, { as: "user_privileges", foreignKey: "privilege_id"});
  user.belongsTo(pronoun, { as: "pronoun", foreignKey: "pronoun_id"});
  pronoun.hasMany(user, { as: "users", foreignKey: "pronoun_id"});
  user.belongsTo(sex_type, { as: "sex_type", foreignKey: "sex_type_id"});
  sex_type.hasMany(user, { as: "users", foreignKey: "sex_type_id"});
  bank_account.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(bank_account, { as: "bank_accounts", foreignKey: "status_id"});
  insurance.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(insurance, { as: "insurances", foreignKey: "status_id"});
  loan_credit.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(loan_credit, { as: "loan_credits", foreignKey: "status_id"});
  recurring_transfer.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(recurring_transfer, { as: "recurring_transfers", foreignKey: "status_id"});
  user.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(user, { as: "users", foreignKey: "status_id"});
  bank_account_movements.belongsTo(table_name, { as: "table_name", foreignKey: "table_name_id"});
  table_name.hasMany(bank_account_movements, { as: "bank_account_movements", foreignKey: "table_name_id"});
  account_notifications.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(account_notifications, { as: "account_notifications", foreignKey: "user_id"});
  contact.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(contact, { as: "contacts", foreignKey: "user_id"});
  employee.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasOne(employee, { as: "employee", foreignKey: "user_id"});
  employees_agencies.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(employees_agencies, { as: "employees_agencies", foreignKey: "user_id"});
  insurance_members.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(insurance_members, { as: "insurance_members", foreignKey: "user_id"});
  transfer.belongsTo(user, { as: "destination_account", foreignKey: "destination_account_id"});
  user.hasMany(transfer, { as: "transfers", foreignKey: "destination_account_id"});
  transfer.belongsTo(user, { as: "source_account", foreignKey: "source_account_id"});
  user.hasMany(transfer, { as: "source_account_transfers", foreignKey: "source_account_id"});
  user_bank_connector.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_bank_connector, { as: "user_bank_connectors", foreignKey: "user_id"});
  user_privileges.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_privileges, { as: "user_privileges", foreignKey: "user_id"});

  return {
    account_card_connector: account_card_connector,
    account_notifications: account_notifications,
    account_type: account_type,
    action: action,
    agencies: agencies,
    balance_history: balance_history,
    bank_account: bank_account,
    bank_account_movements: bank_account_movements,
    card: card,
    card_type: card_type,
    check_type: check_type,
    checks: checks,
    contact: contact,
    contact_type: contact_type,
    credit_payment: credit_payment,
    department: department,
    employee: employee,
    employees_agencies: employees_agencies,
    generated_code: generated_code,
    holder: holder,
    insurance: insurance,
    insurance_account_connector: insurance_account_connector,
    insurance_members: insurance_members,
    insurance_type: insurance_type,
    loan_credit: loan_credit,
    loan_credit_type: loan_credit_type,
    logs: logs,
    period_type: period_type,
    postal_code: postal_code,
    privileges: privileges,
    pronoun: pronoun,
    recurring_transfer: recurring_transfer,
    role: role,
    sex_type: sex_type,
    status: status,
    table_name: table_name,
    transfer: transfer,
    user: user,
    user_bank_connector: user_bank_connector,
    user_privileges: user_privileges,
    withdraw_deposit_atm: withdraw_deposit_atm,
  };
}

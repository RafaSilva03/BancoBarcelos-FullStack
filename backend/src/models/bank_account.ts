import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_card_connector, account_card_connectorId } from './account_card_connector';
import type { account_notifications, account_notificationsId } from './account_notifications';
import type { account_type, account_typeId } from './account_type';
import type { bank_account_movements, bank_account_movementsId } from './bank_account_movements';
import type { checks, checksId } from './checks';
import type { generated_code, generated_codeId } from './generated_code';
import type { insurance_account_connector, insurance_account_connectorId } from './insurance_account_connector';
import type { loan_credit, loan_creditId } from './loan_credit';
import type { recurring_transfer, recurring_transferId } from './recurring_transfer';
import type { status, statusId } from './status';
import type { user_bank_connector, user_bank_connectorId } from './user_bank_connector';

export interface bank_accountAttributes {
  account_number: string;
  iban: string;
  current_balance: number;
  available_balance: number;
  account_type_id: string;
  opened_date: string;
  closed_date?: string;
  status_id: string;
}

export type bank_accountPk = "account_number";
export type bank_accountId = bank_account[bank_accountPk];
export type bank_accountOptionalAttributes = "closed_date";
export type bank_accountCreationAttributes = Optional<bank_accountAttributes, bank_accountOptionalAttributes>;

export class bank_account extends Model<bank_accountAttributes, bank_accountCreationAttributes> implements bank_accountAttributes {
  account_number!: string;
  iban!: string;
  current_balance!: number;
  available_balance!: number;
  account_type_id!: string;
  opened_date!: string;
  closed_date?: string;
  status_id!: string;

  // bank_account belongsTo account_type via account_type_id
  account_type!: account_type;
  getAccount_type!: Sequelize.BelongsToGetAssociationMixin<account_type>;
  setAccount_type!: Sequelize.BelongsToSetAssociationMixin<account_type, account_typeId>;
  createAccount_type!: Sequelize.BelongsToCreateAssociationMixin<account_type>;
  // bank_account hasMany account_card_connector via account_number_id
  account_card_connectors!: account_card_connector[];
  getAccount_card_connectors!: Sequelize.HasManyGetAssociationsMixin<account_card_connector>;
  setAccount_card_connectors!: Sequelize.HasManySetAssociationsMixin<account_card_connector, account_card_connectorId>;
  addAccount_card_connector!: Sequelize.HasManyAddAssociationMixin<account_card_connector, account_card_connectorId>;
  addAccount_card_connectors!: Sequelize.HasManyAddAssociationsMixin<account_card_connector, account_card_connectorId>;
  createAccount_card_connector!: Sequelize.HasManyCreateAssociationMixin<account_card_connector>;
  removeAccount_card_connector!: Sequelize.HasManyRemoveAssociationMixin<account_card_connector, account_card_connectorId>;
  removeAccount_card_connectors!: Sequelize.HasManyRemoveAssociationsMixin<account_card_connector, account_card_connectorId>;
  hasAccount_card_connector!: Sequelize.HasManyHasAssociationMixin<account_card_connector, account_card_connectorId>;
  hasAccount_card_connectors!: Sequelize.HasManyHasAssociationsMixin<account_card_connector, account_card_connectorId>;
  countAccount_card_connectors!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany account_notifications via account_number_id
  account_notifications!: account_notifications[];
  getAccount_notifications!: Sequelize.HasManyGetAssociationsMixin<account_notifications>;
  setAccount_notifications!: Sequelize.HasManySetAssociationsMixin<account_notifications, account_notificationsId>;
  addAccount_notification!: Sequelize.HasManyAddAssociationMixin<account_notifications, account_notificationsId>;
  addAccount_notifications!: Sequelize.HasManyAddAssociationsMixin<account_notifications, account_notificationsId>;
  createAccount_notification!: Sequelize.HasManyCreateAssociationMixin<account_notifications>;
  removeAccount_notification!: Sequelize.HasManyRemoveAssociationMixin<account_notifications, account_notificationsId>;
  removeAccount_notifications!: Sequelize.HasManyRemoveAssociationsMixin<account_notifications, account_notificationsId>;
  hasAccount_notification!: Sequelize.HasManyHasAssociationMixin<account_notifications, account_notificationsId>;
  hasAccount_notifications!: Sequelize.HasManyHasAssociationsMixin<account_notifications, account_notificationsId>;
  countAccount_notifications!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany bank_account_movements via account_number_id
  bank_account_movements!: bank_account_movements[];
  getBank_account_movements!: Sequelize.HasManyGetAssociationsMixin<bank_account_movements>;
  setBank_account_movements!: Sequelize.HasManySetAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  addBank_account_movement!: Sequelize.HasManyAddAssociationMixin<bank_account_movements, bank_account_movementsId>;
  addBank_account_movements!: Sequelize.HasManyAddAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  createBank_account_movement!: Sequelize.HasManyCreateAssociationMixin<bank_account_movements>;
  removeBank_account_movement!: Sequelize.HasManyRemoveAssociationMixin<bank_account_movements, bank_account_movementsId>;
  removeBank_account_movements!: Sequelize.HasManyRemoveAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  hasBank_account_movement!: Sequelize.HasManyHasAssociationMixin<bank_account_movements, bank_account_movementsId>;
  hasBank_account_movements!: Sequelize.HasManyHasAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  countBank_account_movements!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany checks via account_number_id
  checks!: checks[];
  getChecks!: Sequelize.HasManyGetAssociationsMixin<checks>;
  setChecks!: Sequelize.HasManySetAssociationsMixin<checks, checksId>;
  addCheck!: Sequelize.HasManyAddAssociationMixin<checks, checksId>;
  addChecks!: Sequelize.HasManyAddAssociationsMixin<checks, checksId>;
  createCheck!: Sequelize.HasManyCreateAssociationMixin<checks>;
  removeCheck!: Sequelize.HasManyRemoveAssociationMixin<checks, checksId>;
  removeChecks!: Sequelize.HasManyRemoveAssociationsMixin<checks, checksId>;
  hasCheck!: Sequelize.HasManyHasAssociationMixin<checks, checksId>;
  hasChecks!: Sequelize.HasManyHasAssociationsMixin<checks, checksId>;
  countChecks!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany generated_code via account_number_id
  generated_codes!: generated_code[];
  getGenerated_codes!: Sequelize.HasManyGetAssociationsMixin<generated_code>;
  setGenerated_codes!: Sequelize.HasManySetAssociationsMixin<generated_code, generated_codeId>;
  addGenerated_code!: Sequelize.HasManyAddAssociationMixin<generated_code, generated_codeId>;
  addGenerated_codes!: Sequelize.HasManyAddAssociationsMixin<generated_code, generated_codeId>;
  createGenerated_code!: Sequelize.HasManyCreateAssociationMixin<generated_code>;
  removeGenerated_code!: Sequelize.HasManyRemoveAssociationMixin<generated_code, generated_codeId>;
  removeGenerated_codes!: Sequelize.HasManyRemoveAssociationsMixin<generated_code, generated_codeId>;
  hasGenerated_code!: Sequelize.HasManyHasAssociationMixin<generated_code, generated_codeId>;
  hasGenerated_codes!: Sequelize.HasManyHasAssociationsMixin<generated_code, generated_codeId>;
  countGenerated_codes!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany insurance_account_connector via account_number_id
  insurance_account_connectors!: insurance_account_connector[];
  getInsurance_account_connectors!: Sequelize.HasManyGetAssociationsMixin<insurance_account_connector>;
  setInsurance_account_connectors!: Sequelize.HasManySetAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  addInsurance_account_connector!: Sequelize.HasManyAddAssociationMixin<insurance_account_connector, insurance_account_connectorId>;
  addInsurance_account_connectors!: Sequelize.HasManyAddAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  createInsurance_account_connector!: Sequelize.HasManyCreateAssociationMixin<insurance_account_connector>;
  removeInsurance_account_connector!: Sequelize.HasManyRemoveAssociationMixin<insurance_account_connector, insurance_account_connectorId>;
  removeInsurance_account_connectors!: Sequelize.HasManyRemoveAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  hasInsurance_account_connector!: Sequelize.HasManyHasAssociationMixin<insurance_account_connector, insurance_account_connectorId>;
  hasInsurance_account_connectors!: Sequelize.HasManyHasAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  countInsurance_account_connectors!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany loan_credit via account_number_id
  loan_credits!: loan_credit[];
  getLoan_credits!: Sequelize.HasManyGetAssociationsMixin<loan_credit>;
  setLoan_credits!: Sequelize.HasManySetAssociationsMixin<loan_credit, loan_creditId>;
  addLoan_credit!: Sequelize.HasManyAddAssociationMixin<loan_credit, loan_creditId>;
  addLoan_credits!: Sequelize.HasManyAddAssociationsMixin<loan_credit, loan_creditId>;
  createLoan_credit!: Sequelize.HasManyCreateAssociationMixin<loan_credit>;
  removeLoan_credit!: Sequelize.HasManyRemoveAssociationMixin<loan_credit, loan_creditId>;
  removeLoan_credits!: Sequelize.HasManyRemoveAssociationsMixin<loan_credit, loan_creditId>;
  hasLoan_credit!: Sequelize.HasManyHasAssociationMixin<loan_credit, loan_creditId>;
  hasLoan_credits!: Sequelize.HasManyHasAssociationsMixin<loan_credit, loan_creditId>;
  countLoan_credits!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany recurring_transfer via destination_account_id
  recurring_transfers!: recurring_transfer[];
  getRecurring_transfers!: Sequelize.HasManyGetAssociationsMixin<recurring_transfer>;
  setRecurring_transfers!: Sequelize.HasManySetAssociationsMixin<recurring_transfer, recurring_transferId>;
  addRecurring_transfer!: Sequelize.HasManyAddAssociationMixin<recurring_transfer, recurring_transferId>;
  addRecurring_transfers!: Sequelize.HasManyAddAssociationsMixin<recurring_transfer, recurring_transferId>;
  createRecurring_transfer!: Sequelize.HasManyCreateAssociationMixin<recurring_transfer>;
  removeRecurring_transfer!: Sequelize.HasManyRemoveAssociationMixin<recurring_transfer, recurring_transferId>;
  removeRecurring_transfers!: Sequelize.HasManyRemoveAssociationsMixin<recurring_transfer, recurring_transferId>;
  hasRecurring_transfer!: Sequelize.HasManyHasAssociationMixin<recurring_transfer, recurring_transferId>;
  hasRecurring_transfers!: Sequelize.HasManyHasAssociationsMixin<recurring_transfer, recurring_transferId>;
  countRecurring_transfers!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany recurring_transfer via source_account_id
  source_account_recurring_transfers!: recurring_transfer[];
  getSource_account_recurring_transfers!: Sequelize.HasManyGetAssociationsMixin<recurring_transfer>;
  setSource_account_recurring_transfers!: Sequelize.HasManySetAssociationsMixin<recurring_transfer, recurring_transferId>;
  addSource_account_recurring_transfer!: Sequelize.HasManyAddAssociationMixin<recurring_transfer, recurring_transferId>;
  addSource_account_recurring_transfers!: Sequelize.HasManyAddAssociationsMixin<recurring_transfer, recurring_transferId>;
  createSource_account_recurring_transfer!: Sequelize.HasManyCreateAssociationMixin<recurring_transfer>;
  removeSource_account_recurring_transfer!: Sequelize.HasManyRemoveAssociationMixin<recurring_transfer, recurring_transferId>;
  removeSource_account_recurring_transfers!: Sequelize.HasManyRemoveAssociationsMixin<recurring_transfer, recurring_transferId>;
  hasSource_account_recurring_transfer!: Sequelize.HasManyHasAssociationMixin<recurring_transfer, recurring_transferId>;
  hasSource_account_recurring_transfers!: Sequelize.HasManyHasAssociationsMixin<recurring_transfer, recurring_transferId>;
  countSource_account_recurring_transfers!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account hasMany user_bank_connector via account_number_id
  user_bank_connectors!: user_bank_connector[];
  getUser_bank_connectors!: Sequelize.HasManyGetAssociationsMixin<user_bank_connector>;
  setUser_bank_connectors!: Sequelize.HasManySetAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  addUser_bank_connector!: Sequelize.HasManyAddAssociationMixin<user_bank_connector, user_bank_connectorId>;
  addUser_bank_connectors!: Sequelize.HasManyAddAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  createUser_bank_connector!: Sequelize.HasManyCreateAssociationMixin<user_bank_connector>;
  removeUser_bank_connector!: Sequelize.HasManyRemoveAssociationMixin<user_bank_connector, user_bank_connectorId>;
  removeUser_bank_connectors!: Sequelize.HasManyRemoveAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  hasUser_bank_connector!: Sequelize.HasManyHasAssociationMixin<user_bank_connector, user_bank_connectorId>;
  hasUser_bank_connectors!: Sequelize.HasManyHasAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  countUser_bank_connectors!: Sequelize.HasManyCountAssociationsMixin;
  // bank_account belongsTo status via status_id
  status!: status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<status, statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bank_account {
    return bank_account.init({
    account_number: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    iban: {
      type: DataTypes.STRING(26),
      allowNull: false
    },
    current_balance: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    available_balance: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    account_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'account_type',
        key: 'id'
      }
    },
    opened_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    closed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bank_account',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "bank_account_pkey",
        unique: true,
        fields: [
          { name: "account_number" },
        ]
      },
    ]
  });
  }
}

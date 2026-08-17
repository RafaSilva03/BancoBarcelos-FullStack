import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { insurance, insuranceId } from './insurance';
import type { loan_credit, loan_creditId } from './loan_credit';
import type { recurring_transfer, recurring_transferId } from './recurring_transfer';
import type { user, userId } from './user';

export interface statusAttributes {
  id: string;
  status: string;
}

export type statusPk = "id";
export type statusId = status[statusPk];
export type statusCreationAttributes = statusAttributes;

export class status extends Model<statusAttributes, statusCreationAttributes> implements statusAttributes {
  id!: string;
  status!: string;

  // status hasMany bank_account via status_id
  bank_accounts!: bank_account[];
  getBank_accounts!: Sequelize.HasManyGetAssociationsMixin<bank_account>;
  setBank_accounts!: Sequelize.HasManySetAssociationsMixin<bank_account, bank_accountId>;
  addBank_account!: Sequelize.HasManyAddAssociationMixin<bank_account, bank_accountId>;
  addBank_accounts!: Sequelize.HasManyAddAssociationsMixin<bank_account, bank_accountId>;
  createBank_account!: Sequelize.HasManyCreateAssociationMixin<bank_account>;
  removeBank_account!: Sequelize.HasManyRemoveAssociationMixin<bank_account, bank_accountId>;
  removeBank_accounts!: Sequelize.HasManyRemoveAssociationsMixin<bank_account, bank_accountId>;
  hasBank_account!: Sequelize.HasManyHasAssociationMixin<bank_account, bank_accountId>;
  hasBank_accounts!: Sequelize.HasManyHasAssociationsMixin<bank_account, bank_accountId>;
  countBank_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // status hasMany insurance via status_id
  insurances!: insurance[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<insurance>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<insurance, insuranceId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<insurance, insuranceId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<insurance>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<insurance, insuranceId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<insurance, insuranceId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<insurance, insuranceId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<insurance, insuranceId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;
  // status hasMany loan_credit via status_id
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
  // status hasMany recurring_transfer via status_id
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
  // status hasMany user via status_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof status {
    return status.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { credit_payment, credit_paymentId } from './credit_payment';
import type { loan_credit_type, loan_credit_typeId } from './loan_credit_type';
import type { status, statusId } from './status';

export interface loan_creditAttributes {
  id: string;
  value: number;
  start_date: string;
  final_date: string;
  terms: string;
  status_id: string;
  tan: number;
  taeg: number;
  mtic: number;
  account_number_id: string;
  loan_credit_type_id: string;
}

export type loan_creditPk = "id";
export type loan_creditId = loan_credit[loan_creditPk];
export type loan_creditCreationAttributes = loan_creditAttributes;

export class loan_credit extends Model<loan_creditAttributes, loan_creditCreationAttributes> implements loan_creditAttributes {
  id!: string;
  value!: number;
  start_date!: string;
  final_date!: string;
  terms!: string;
  status_id!: string;
  tan!: number;
  taeg!: number;
  mtic!: number;
  account_number_id!: string;
  loan_credit_type_id!: string;

  // loan_credit belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // loan_credit hasMany credit_payment via loan_credit_id
  credit_payments!: credit_payment[];
  getCredit_payments!: Sequelize.HasManyGetAssociationsMixin<credit_payment>;
  setCredit_payments!: Sequelize.HasManySetAssociationsMixin<credit_payment, credit_paymentId>;
  addCredit_payment!: Sequelize.HasManyAddAssociationMixin<credit_payment, credit_paymentId>;
  addCredit_payments!: Sequelize.HasManyAddAssociationsMixin<credit_payment, credit_paymentId>;
  createCredit_payment!: Sequelize.HasManyCreateAssociationMixin<credit_payment>;
  removeCredit_payment!: Sequelize.HasManyRemoveAssociationMixin<credit_payment, credit_paymentId>;
  removeCredit_payments!: Sequelize.HasManyRemoveAssociationsMixin<credit_payment, credit_paymentId>;
  hasCredit_payment!: Sequelize.HasManyHasAssociationMixin<credit_payment, credit_paymentId>;
  hasCredit_payments!: Sequelize.HasManyHasAssociationsMixin<credit_payment, credit_paymentId>;
  countCredit_payments!: Sequelize.HasManyCountAssociationsMixin;
  // loan_credit belongsTo loan_credit_type via loan_credit_type_id
  loan_credit_type!: loan_credit_type;
  getLoan_credit_type!: Sequelize.BelongsToGetAssociationMixin<loan_credit_type>;
  setLoan_credit_type!: Sequelize.BelongsToSetAssociationMixin<loan_credit_type, loan_credit_typeId>;
  createLoan_credit_type!: Sequelize.BelongsToCreateAssociationMixin<loan_credit_type>;
  // loan_credit belongsTo status via status_id
  status!: status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<status, statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof loan_credit {
    return loan_credit.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    final_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    terms: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    tan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    taeg: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    mtic: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    account_number_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    },
    loan_credit_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'loan_credit_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'loan_credit',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "loan_credit_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

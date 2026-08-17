import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { period_type, period_typeId } from './period_type';
import type { status, statusId } from './status';

export interface recurring_transferAttributes {
  id: string;
  source_account_id: string;
  destination_account_id: string;
  ammount: number;
  tax_fee: number;
  period_type_id: string;
  status_id: string;
  start_date: string;
  end_date: string;
  description: string;
}

export type recurring_transferPk = "id";
export type recurring_transferId = recurring_transfer[recurring_transferPk];
export type recurring_transferCreationAttributes = recurring_transferAttributes;

export class recurring_transfer extends Model<recurring_transferAttributes, recurring_transferCreationAttributes> implements recurring_transferAttributes {
  id!: string;
  source_account_id!: string;
  destination_account_id!: string;
  ammount!: number;
  tax_fee!: number;
  period_type_id!: string;
  status_id!: string;
  start_date!: string;
  end_date!: string;
  description!: string;

  // recurring_transfer belongsTo bank_account via destination_account_id
  destination_account!: bank_account;
  getDestination_account!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setDestination_account!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createDestination_account!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // recurring_transfer belongsTo bank_account via source_account_id
  source_account!: bank_account;
  getSource_account!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setSource_account!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createSource_account!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // recurring_transfer belongsTo period_type via period_type_id
  period_type!: period_type;
  getPeriod_type!: Sequelize.BelongsToGetAssociationMixin<period_type>;
  setPeriod_type!: Sequelize.BelongsToSetAssociationMixin<period_type, period_typeId>;
  createPeriod_type!: Sequelize.BelongsToCreateAssociationMixin<period_type>;
  // recurring_transfer belongsTo status via status_id
  status!: status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<status, statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof recurring_transfer {
    return recurring_transfer.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    source_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    },
    destination_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    },
    ammount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tax_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    period_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'period_type',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'recurring_transfer',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "recurring_transfer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

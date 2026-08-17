import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { balance_history, balance_historyId } from './balance_history';
import type { bank_account, bank_accountId } from './bank_account';
import type { generated_code, generated_codeId } from './generated_code';
import type { table_name, table_nameId } from './table_name';

export interface bank_account_movementsAttributes {
  id: string;
  account_number_id: string;
  movement_id: string;
  table_name_id: string;
  date: Date;
  balance_history_id: string;
}

export type bank_account_movementsPk = "id";
export type bank_account_movementsId = bank_account_movements[bank_account_movementsPk];
export type bank_account_movementsCreationAttributes = bank_account_movementsAttributes;

export class bank_account_movements extends Model<bank_account_movementsAttributes, bank_account_movementsCreationAttributes> implements bank_account_movementsAttributes {
  id!: string;
  account_number_id!: string;
  movement_id!: string;
  table_name_id!: string;
  date!: Date;
  balance_history_id!: string;

  // bank_account_movements belongsTo balance_history via balance_history_id
  balance_history!: balance_history;
  getBalance_history!: Sequelize.BelongsToGetAssociationMixin<balance_history>;
  setBalance_history!: Sequelize.BelongsToSetAssociationMixin<balance_history, balance_historyId>;
  createBalance_history!: Sequelize.BelongsToCreateAssociationMixin<balance_history>;
  // bank_account_movements belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // bank_account_movements belongsTo generated_code via movement_id
  movement!: generated_code;
  getMovement!: Sequelize.BelongsToGetAssociationMixin<generated_code>;
  setMovement!: Sequelize.BelongsToSetAssociationMixin<generated_code, generated_codeId>;
  createMovement!: Sequelize.BelongsToCreateAssociationMixin<generated_code>;
  // bank_account_movements belongsTo table_name via table_name_id
  table_name!: table_name;
  getTable_name!: Sequelize.BelongsToGetAssociationMixin<table_name>;
  setTable_name!: Sequelize.BelongsToSetAssociationMixin<table_name, table_nameId>;
  createTable_name!: Sequelize.BelongsToCreateAssociationMixin<table_name>;

  static initModel(sequelize: Sequelize.Sequelize): typeof bank_account_movements {
    return bank_account_movements.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    account_number_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    },
    movement_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'generated_code',
        key: 'id'
      }
    },
    table_name_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'table_name',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    balance_history_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'balance_history',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bank_account_movements',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "bank_account_movements_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

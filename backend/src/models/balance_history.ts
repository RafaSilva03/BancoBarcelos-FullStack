import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account_movements, bank_account_movementsId } from './bank_account_movements';

export interface balance_historyAttributes {
  id: string;
  balance_before: number;
  balance_after: number;
}

export type balance_historyPk = "id";
export type balance_historyId = balance_history[balance_historyPk];
export type balance_historyCreationAttributes = balance_historyAttributes;

export class balance_history extends Model<balance_historyAttributes, balance_historyCreationAttributes> implements balance_historyAttributes {
  id!: string;
  balance_before!: number;
  balance_after!: number;

  // balance_history hasMany bank_account_movements via balance_history_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof balance_history {
    return balance_history.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    balance_before: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    balance_after: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'balance_history',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "balance_history_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';

export interface account_typeAttributes {
  id: string;
  type: string;
}

export type account_typePk = "id";
export type account_typeId = account_type[account_typePk];
export type account_typeCreationAttributes = account_typeAttributes;

export class account_type extends Model<account_typeAttributes, account_typeCreationAttributes> implements account_typeAttributes {
  id!: string;
  type!: string;

  // account_type hasMany bank_account via account_type_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof account_type {
    return account_type.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'account_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "account_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

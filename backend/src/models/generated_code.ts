import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { bank_account_movements, bank_account_movementsId } from './bank_account_movements';

export interface generated_codeAttributes {
  id: string;
  code: string;
  ammount: number;
  exp_date: string;
  used: boolean;
  account_number_id: string;
}

export type generated_codePk = "id";
export type generated_codeId = generated_code[generated_codePk];
export type generated_codeCreationAttributes = generated_codeAttributes;

export class generated_code extends Model<generated_codeAttributes, generated_codeCreationAttributes> implements generated_codeAttributes {
  id!: string;
  code!: string;
  ammount!: number;
  exp_date!: string;
  used!: boolean;
  account_number_id!: string;

  // generated_code belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // generated_code hasMany bank_account_movements via movement_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof generated_code {
    return generated_code.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    ammount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    account_number_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    }
  }, {
    sequelize,
    tableName: 'generated_code',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "generated_code_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

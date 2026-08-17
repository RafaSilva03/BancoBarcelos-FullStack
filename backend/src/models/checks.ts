import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { check_type, check_typeId } from './check_type';

export interface checksAttributes {
  id: string;
  check_number: string;
  value: number;
  emission_date: string;
  account_number_id: string;
  check_type_id: string;
}

export type checksPk = "id";
export type checksId = checks[checksPk];
export type checksCreationAttributes = checksAttributes;

export class checks extends Model<checksAttributes, checksCreationAttributes> implements checksAttributes {
  id!: string;
  check_number!: string;
  value!: number;
  emission_date!: string;
  account_number_id!: string;
  check_type_id!: string;

  // checks belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // checks belongsTo check_type via check_type_id
  check_type!: check_type;
  getCheck_type!: Sequelize.BelongsToGetAssociationMixin<check_type>;
  setCheck_type!: Sequelize.BelongsToSetAssociationMixin<check_type, check_typeId>;
  createCheck_type!: Sequelize.BelongsToCreateAssociationMixin<check_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof checks {
    return checks.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    check_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    emission_date: {
      type: DataTypes.DATEONLY,
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
    check_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'check_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'checks',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "checks_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

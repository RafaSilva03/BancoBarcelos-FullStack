import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { insurance, insuranceId } from './insurance';

export interface insurance_account_connectorAttributes {
  id: string;
  account_number_id: string;
  insurance_id: string;
}

export type insurance_account_connectorPk = "id";
export type insurance_account_connectorId = insurance_account_connector[insurance_account_connectorPk];
export type insurance_account_connectorCreationAttributes = insurance_account_connectorAttributes;

export class insurance_account_connector extends Model<insurance_account_connectorAttributes, insurance_account_connectorCreationAttributes> implements insurance_account_connectorAttributes {
  id!: string;
  account_number_id!: string;
  insurance_id!: string;

  // insurance_account_connector belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // insurance_account_connector belongsTo insurance via insurance_id
  insurance!: insurance;
  getInsurance!: Sequelize.BelongsToGetAssociationMixin<insurance>;
  setInsurance!: Sequelize.BelongsToSetAssociationMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.BelongsToCreateAssociationMixin<insurance>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_account_connector {
    return insurance_account_connector.init({
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
    insurance_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'insurance',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'insurance_account_connector',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "insurance_account_connector_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { holder, holderId } from './holder';
import type { user, userId } from './user';

export interface user_bank_connectorAttributes {
  id: string;
  user_id: string;
  account_number_id: string;
  holder_id: string;
}

export type user_bank_connectorPk = "id";
export type user_bank_connectorId = user_bank_connector[user_bank_connectorPk];
export type user_bank_connectorCreationAttributes = user_bank_connectorAttributes;

export class user_bank_connector extends Model<user_bank_connectorAttributes, user_bank_connectorCreationAttributes> implements user_bank_connectorAttributes {
  id!: string;
  user_id!: string;
  account_number_id!: string;
  holder_id!: string;

  // user_bank_connector belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // user_bank_connector belongsTo holder via holder_id
  holder!: holder;
  getHolder!: Sequelize.BelongsToGetAssociationMixin<holder>;
  setHolder!: Sequelize.BelongsToSetAssociationMixin<holder, holderId>;
  createHolder!: Sequelize.BelongsToCreateAssociationMixin<holder>;
  // user_bank_connector belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_bank_connector {
    return user_bank_connector.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    account_number_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    },
    holder_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'holder',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_bank_connector',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "user_bank_connector_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { card, cardId } from './card';

export interface account_card_connectorAttributes {
  id: string;
  account_number_id: string;
  card_id: string;
}

export type account_card_connectorPk = "id";
export type account_card_connectorId = account_card_connector[account_card_connectorPk];
export type account_card_connectorCreationAttributes = account_card_connectorAttributes;

export class account_card_connector extends Model<account_card_connectorAttributes, account_card_connectorCreationAttributes> implements account_card_connectorAttributes {
  id!: string;
  account_number_id!: string;
  card_id!: string;

  // account_card_connector belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // account_card_connector belongsTo card via card_id
  card!: card;
  getCard!: Sequelize.BelongsToGetAssociationMixin<card>;
  setCard!: Sequelize.BelongsToSetAssociationMixin<card, cardId>;
  createCard!: Sequelize.BelongsToCreateAssociationMixin<card>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_card_connector {
    return account_card_connector.init({
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
    card_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'card',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'account_card_connector',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "account_card_connector_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

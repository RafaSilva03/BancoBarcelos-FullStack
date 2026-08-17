import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_card_connector, account_card_connectorId } from './account_card_connector';
import type { card_type, card_typeId } from './card_type';

export interface cardAttributes {
  id: string;
  number: string;
  exp_date: string;
  cvv: string;
  amount_limit: number;
  card_type_id: string;
}

export type cardPk = "id";
export type cardId = card[cardPk];
export type cardCreationAttributes = cardAttributes;

export class card extends Model<cardAttributes, cardCreationAttributes> implements cardAttributes {
  id!: string;
  number!: string;
  exp_date!: string;
  cvv!: string;
  amount_limit!: number;
  card_type_id!: string;

  // card hasMany account_card_connector via card_id
  account_card_connectors!: account_card_connector[];
  getAccount_card_connectors!: Sequelize.HasManyGetAssociationsMixin<account_card_connector>;
  setAccount_card_connectors!: Sequelize.HasManySetAssociationsMixin<account_card_connector, account_card_connectorId>;
  addAccount_card_connector!: Sequelize.HasManyAddAssociationMixin<account_card_connector, account_card_connectorId>;
  addAccount_card_connectors!: Sequelize.HasManyAddAssociationsMixin<account_card_connector, account_card_connectorId>;
  createAccount_card_connector!: Sequelize.HasManyCreateAssociationMixin<account_card_connector>;
  removeAccount_card_connector!: Sequelize.HasManyRemoveAssociationMixin<account_card_connector, account_card_connectorId>;
  removeAccount_card_connectors!: Sequelize.HasManyRemoveAssociationsMixin<account_card_connector, account_card_connectorId>;
  hasAccount_card_connector!: Sequelize.HasManyHasAssociationMixin<account_card_connector, account_card_connectorId>;
  hasAccount_card_connectors!: Sequelize.HasManyHasAssociationsMixin<account_card_connector, account_card_connectorId>;
  countAccount_card_connectors!: Sequelize.HasManyCountAssociationsMixin;
  // card belongsTo card_type via card_type_id
  card_type!: card_type;
  getCard_type!: Sequelize.BelongsToGetAssociationMixin<card_type>;
  setCard_type!: Sequelize.BelongsToSetAssociationMixin<card_type, card_typeId>;
  createCard_type!: Sequelize.BelongsToCreateAssociationMixin<card_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof card {
    return card.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cvv: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount_limit: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    card_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'card_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'card',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "card_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

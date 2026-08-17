import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { card, cardId } from './card';

export interface card_typeAttributes {
  id: string;
  name: string;
}

export type card_typePk = "id";
export type card_typeId = card_type[card_typePk];
export type card_typeCreationAttributes = card_typeAttributes;

export class card_type extends Model<card_typeAttributes, card_typeCreationAttributes> implements card_typeAttributes {
  id!: string;
  name!: string;

  // card_type hasMany card via card_type_id
  cards!: card[];
  getCards!: Sequelize.HasManyGetAssociationsMixin<card>;
  setCards!: Sequelize.HasManySetAssociationsMixin<card, cardId>;
  addCard!: Sequelize.HasManyAddAssociationMixin<card, cardId>;
  addCards!: Sequelize.HasManyAddAssociationsMixin<card, cardId>;
  createCard!: Sequelize.HasManyCreateAssociationMixin<card>;
  removeCard!: Sequelize.HasManyRemoveAssociationMixin<card, cardId>;
  removeCards!: Sequelize.HasManyRemoveAssociationsMixin<card, cardId>;
  hasCard!: Sequelize.HasManyHasAssociationMixin<card, cardId>;
  hasCards!: Sequelize.HasManyHasAssociationsMixin<card, cardId>;
  countCards!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof card_type {
    return card_type.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'card_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "card_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_bank_connector, user_bank_connectorId } from './user_bank_connector';

export interface holderAttributes {
  id: string;
  name: string;
}

export type holderPk = "id";
export type holderId = holder[holderPk];
export type holderCreationAttributes = holderAttributes;

export class holder extends Model<holderAttributes, holderCreationAttributes> implements holderAttributes {
  id!: string;
  name!: string;

  // holder hasMany user_bank_connector via holder_id
  user_bank_connectors!: user_bank_connector[];
  getUser_bank_connectors!: Sequelize.HasManyGetAssociationsMixin<user_bank_connector>;
  setUser_bank_connectors!: Sequelize.HasManySetAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  addUser_bank_connector!: Sequelize.HasManyAddAssociationMixin<user_bank_connector, user_bank_connectorId>;
  addUser_bank_connectors!: Sequelize.HasManyAddAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  createUser_bank_connector!: Sequelize.HasManyCreateAssociationMixin<user_bank_connector>;
  removeUser_bank_connector!: Sequelize.HasManyRemoveAssociationMixin<user_bank_connector, user_bank_connectorId>;
  removeUser_bank_connectors!: Sequelize.HasManyRemoveAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  hasUser_bank_connector!: Sequelize.HasManyHasAssociationMixin<user_bank_connector, user_bank_connectorId>;
  hasUser_bank_connectors!: Sequelize.HasManyHasAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  countUser_bank_connectors!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof holder {
    return holder.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'holder',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "holder_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface sex_typeAttributes {
  id: string;
  type: string;
}

export type sex_typePk = "id";
export type sex_typeId = sex_type[sex_typePk];
export type sex_typeCreationAttributes = sex_typeAttributes;

export class sex_type extends Model<sex_typeAttributes, sex_typeCreationAttributes> implements sex_typeAttributes {
  id!: string;
  type!: string;

  // sex_type hasMany user via sex_type_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof sex_type {
    return sex_type.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sex_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "sex_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface pronounAttributes {
  id: string;
  name: string;
}

export type pronounPk = "id";
export type pronounId = pronoun[pronounPk];
export type pronounCreationAttributes = pronounAttributes;

export class pronoun extends Model<pronounAttributes, pronounCreationAttributes> implements pronounAttributes {
  id!: string;
  name!: string;

  // pronoun hasMany user via pronoun_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof pronoun {
    return pronoun.init({
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
    tableName: 'pronoun',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "pronoun_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

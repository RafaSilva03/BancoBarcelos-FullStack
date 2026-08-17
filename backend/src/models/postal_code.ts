import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agencies, agenciesId } from './agencies';
import type { user, userId } from './user';

export interface postal_codeAttributes {
  id: string;
  code: string;
  location: string;
}

export type postal_codePk = "id";
export type postal_codeId = postal_code[postal_codePk];
export type postal_codeCreationAttributes = postal_codeAttributes;

export class postal_code extends Model<postal_codeAttributes, postal_codeCreationAttributes> implements postal_codeAttributes {
  id!: string;
  code!: string;
  location!: string;

  // postal_code hasMany agencies via postal_code_id
  agencies!: agencies[];
  getAgencies!: Sequelize.HasManyGetAssociationsMixin<agencies>;
  setAgencies!: Sequelize.HasManySetAssociationsMixin<agencies, agenciesId>;
  addAgency!: Sequelize.HasManyAddAssociationMixin<agencies, agenciesId>;
  addAgencies!: Sequelize.HasManyAddAssociationsMixin<agencies, agenciesId>;
  createAgency!: Sequelize.HasManyCreateAssociationMixin<agencies>;
  removeAgency!: Sequelize.HasManyRemoveAssociationMixin<agencies, agenciesId>;
  removeAgencies!: Sequelize.HasManyRemoveAssociationsMixin<agencies, agenciesId>;
  hasAgency!: Sequelize.HasManyHasAssociationMixin<agencies, agenciesId>;
  hasAgencies!: Sequelize.HasManyHasAssociationsMixin<agencies, agenciesId>;
  countAgencies!: Sequelize.HasManyCountAssociationsMixin;
  // postal_code hasMany user via postal_code_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof postal_code {
    return postal_code.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'postal_code',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "postal_code_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_privileges, user_privilegesId } from './user_privileges';

export interface privilegesAttributes {
  id: string;
  privilege: string;
}

export type privilegesPk = "id";
export type privilegesId = privileges[privilegesPk];
export type privilegesCreationAttributes = privilegesAttributes;

export class privileges extends Model<privilegesAttributes, privilegesCreationAttributes> implements privilegesAttributes {
  id!: string;
  privilege!: string;

  // privileges hasMany user_privileges via privilege_id
  user_privileges!: user_privileges[];
  getUser_privileges!: Sequelize.HasManyGetAssociationsMixin<user_privileges>;
  setUser_privileges!: Sequelize.HasManySetAssociationsMixin<user_privileges, user_privilegesId>;
  addUser_privilege!: Sequelize.HasManyAddAssociationMixin<user_privileges, user_privilegesId>;
  addUser_privileges!: Sequelize.HasManyAddAssociationsMixin<user_privileges, user_privilegesId>;
  createUser_privilege!: Sequelize.HasManyCreateAssociationMixin<user_privileges>;
  removeUser_privilege!: Sequelize.HasManyRemoveAssociationMixin<user_privileges, user_privilegesId>;
  removeUser_privileges!: Sequelize.HasManyRemoveAssociationsMixin<user_privileges, user_privilegesId>;
  hasUser_privilege!: Sequelize.HasManyHasAssociationMixin<user_privileges, user_privilegesId>;
  hasUser_privileges!: Sequelize.HasManyHasAssociationsMixin<user_privileges, user_privilegesId>;
  countUser_privileges!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof privileges {
    return privileges.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    privilege: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'privileges',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "privileges_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { privileges, privilegesId } from './privileges';
import type { user, userId } from './user';

export interface user_privilegesAttributes {
  id: string;
  user_id: string;
  privilege_id: string;
}

export type user_privilegesPk = "id";
export type user_privilegesId = user_privileges[user_privilegesPk];
export type user_privilegesCreationAttributes = user_privilegesAttributes;

export class user_privileges extends Model<user_privilegesAttributes, user_privilegesCreationAttributes> implements user_privilegesAttributes {
  id!: string;
  user_id!: string;
  privilege_id!: string;

  // user_privileges belongsTo privileges via privilege_id
  privilege!: privileges;
  getPrivilege!: Sequelize.BelongsToGetAssociationMixin<privileges>;
  setPrivilege!: Sequelize.BelongsToSetAssociationMixin<privileges, privilegesId>;
  createPrivilege!: Sequelize.BelongsToCreateAssociationMixin<privileges>;
  // user_privileges belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_privileges {
    return user_privileges.init({
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
    privilege_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'privileges',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_privileges',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "user_privileges_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

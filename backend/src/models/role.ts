import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { department, departmentId } from './department';

export interface roleAttributes {
  id: string;
  name: string;
  department_id: string;
}

export type rolePk = "id";
export type roleId = role[rolePk];
export type roleCreationAttributes = roleAttributes;

export class role extends Model<roleAttributes, roleCreationAttributes> implements roleAttributes {
  id!: string;
  name!: string;
  department_id!: string;

  // role belongsTo department via department_id
  department!: department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<department>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role {
    return role.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    department_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'department',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'role',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role, roleId } from './role';

export interface departmentAttributes {
  id: string;
  name: string;
}

export type departmentPk = "id";
export type departmentId = department[departmentPk];
export type departmentCreationAttributes = departmentAttributes;

export class department extends Model<departmentAttributes, departmentCreationAttributes> implements departmentAttributes {
  id!: string;
  name!: string;

  // department hasMany role via department_id
  roles!: role[];
  getRoles!: Sequelize.HasManyGetAssociationsMixin<role>;
  setRoles!: Sequelize.HasManySetAssociationsMixin<role, roleId>;
  addRole!: Sequelize.HasManyAddAssociationMixin<role, roleId>;
  addRoles!: Sequelize.HasManyAddAssociationsMixin<role, roleId>;
  createRole!: Sequelize.HasManyCreateAssociationMixin<role>;
  removeRole!: Sequelize.HasManyRemoveAssociationMixin<role, roleId>;
  removeRoles!: Sequelize.HasManyRemoveAssociationsMixin<role, roleId>;
  hasRole!: Sequelize.HasManyHasAssociationMixin<role, roleId>;
  hasRoles!: Sequelize.HasManyHasAssociationsMixin<role, roleId>;
  countRoles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof department {
    return department.init({
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
    tableName: 'department',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

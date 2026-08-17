import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { checks, checksId } from './checks';

export interface check_typeAttributes {
  id: string;
  type: string;
}

export type check_typePk = "id";
export type check_typeId = check_type[check_typePk];
export type check_typeCreationAttributes = check_typeAttributes;

export class check_type extends Model<check_typeAttributes, check_typeCreationAttributes> implements check_typeAttributes {
  id!: string;
  type!: string;

  // check_type hasMany checks via check_type_id
  checks!: checks[];
  getChecks!: Sequelize.HasManyGetAssociationsMixin<checks>;
  setChecks!: Sequelize.HasManySetAssociationsMixin<checks, checksId>;
  addCheck!: Sequelize.HasManyAddAssociationMixin<checks, checksId>;
  addChecks!: Sequelize.HasManyAddAssociationsMixin<checks, checksId>;
  createCheck!: Sequelize.HasManyCreateAssociationMixin<checks>;
  removeCheck!: Sequelize.HasManyRemoveAssociationMixin<checks, checksId>;
  removeChecks!: Sequelize.HasManyRemoveAssociationsMixin<checks, checksId>;
  hasCheck!: Sequelize.HasManyHasAssociationMixin<checks, checksId>;
  hasChecks!: Sequelize.HasManyHasAssociationsMixin<checks, checksId>;
  countChecks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof check_type {
    return check_type.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'check_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "check_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

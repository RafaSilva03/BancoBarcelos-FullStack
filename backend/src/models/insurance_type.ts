import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';

export interface insurance_typeAttributes {
  id: string;
  name: string;
}

export type insurance_typePk = "id";
export type insurance_typeId = insurance_type[insurance_typePk];
export type insurance_typeCreationAttributes = insurance_typeAttributes;

export class insurance_type extends Model<insurance_typeAttributes, insurance_typeCreationAttributes> implements insurance_typeAttributes {
  id!: string;
  name!: string;

  // insurance_type hasMany insurance via insurance_type_id
  insurances!: insurance[];
  getInsurances!: Sequelize.HasManyGetAssociationsMixin<insurance>;
  setInsurances!: Sequelize.HasManySetAssociationsMixin<insurance, insuranceId>;
  addInsurance!: Sequelize.HasManyAddAssociationMixin<insurance, insuranceId>;
  addInsurances!: Sequelize.HasManyAddAssociationsMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.HasManyCreateAssociationMixin<insurance>;
  removeInsurance!: Sequelize.HasManyRemoveAssociationMixin<insurance, insuranceId>;
  removeInsurances!: Sequelize.HasManyRemoveAssociationsMixin<insurance, insuranceId>;
  hasInsurance!: Sequelize.HasManyHasAssociationMixin<insurance, insuranceId>;
  hasInsurances!: Sequelize.HasManyHasAssociationsMixin<insurance, insuranceId>;
  countInsurances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_type {
    return insurance_type.init({
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
    tableName: 'insurance_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "insurance_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

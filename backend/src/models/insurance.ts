import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance_account_connector, insurance_account_connectorId } from './insurance_account_connector';
import type { insurance_members, insurance_membersId } from './insurance_members';
import type { insurance_type, insurance_typeId } from './insurance_type';
import type { status, statusId } from './status';

export interface insuranceAttributes {
  id: string;
  detaisl: string;
  exp_date: string;
  registration_date: string;
  status_id: string;
  insurance_type_id: string;
}

export type insurancePk = "id";
export type insuranceId = insurance[insurancePk];
export type insuranceCreationAttributes = insuranceAttributes;

export class insurance extends Model<insuranceAttributes, insuranceCreationAttributes> implements insuranceAttributes {
  id!: string;
  detaisl!: string;
  exp_date!: string;
  registration_date!: string;
  status_id!: string;
  insurance_type_id!: string;

  // insurance hasMany insurance_account_connector via insurance_id
  insurance_account_connectors!: insurance_account_connector[];
  getInsurance_account_connectors!: Sequelize.HasManyGetAssociationsMixin<insurance_account_connector>;
  setInsurance_account_connectors!: Sequelize.HasManySetAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  addInsurance_account_connector!: Sequelize.HasManyAddAssociationMixin<insurance_account_connector, insurance_account_connectorId>;
  addInsurance_account_connectors!: Sequelize.HasManyAddAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  createInsurance_account_connector!: Sequelize.HasManyCreateAssociationMixin<insurance_account_connector>;
  removeInsurance_account_connector!: Sequelize.HasManyRemoveAssociationMixin<insurance_account_connector, insurance_account_connectorId>;
  removeInsurance_account_connectors!: Sequelize.HasManyRemoveAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  hasInsurance_account_connector!: Sequelize.HasManyHasAssociationMixin<insurance_account_connector, insurance_account_connectorId>;
  hasInsurance_account_connectors!: Sequelize.HasManyHasAssociationsMixin<insurance_account_connector, insurance_account_connectorId>;
  countInsurance_account_connectors!: Sequelize.HasManyCountAssociationsMixin;
  // insurance hasMany insurance_members via insurance_id
  insurance_members!: insurance_members[];
  getInsurance_members!: Sequelize.HasManyGetAssociationsMixin<insurance_members>;
  setInsurance_members!: Sequelize.HasManySetAssociationsMixin<insurance_members, insurance_membersId>;
  addInsurance_member!: Sequelize.HasManyAddAssociationMixin<insurance_members, insurance_membersId>;
  addInsurance_members!: Sequelize.HasManyAddAssociationsMixin<insurance_members, insurance_membersId>;
  createInsurance_member!: Sequelize.HasManyCreateAssociationMixin<insurance_members>;
  removeInsurance_member!: Sequelize.HasManyRemoveAssociationMixin<insurance_members, insurance_membersId>;
  removeInsurance_members!: Sequelize.HasManyRemoveAssociationsMixin<insurance_members, insurance_membersId>;
  hasInsurance_member!: Sequelize.HasManyHasAssociationMixin<insurance_members, insurance_membersId>;
  hasInsurance_members!: Sequelize.HasManyHasAssociationsMixin<insurance_members, insurance_membersId>;
  countInsurance_members!: Sequelize.HasManyCountAssociationsMixin;
  // insurance belongsTo insurance_type via insurance_type_id
  insurance_type!: insurance_type;
  getInsurance_type!: Sequelize.BelongsToGetAssociationMixin<insurance_type>;
  setInsurance_type!: Sequelize.BelongsToSetAssociationMixin<insurance_type, insurance_typeId>;
  createInsurance_type!: Sequelize.BelongsToCreateAssociationMixin<insurance_type>;
  // insurance belongsTo status via status_id
  status!: status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<status, statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<status>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance {
    return insurance.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    detaisl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    registration_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    insurance_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'insurance_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'insurance',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "insurance_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

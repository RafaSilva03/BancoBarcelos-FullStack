import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contact, contactId } from './contact';
import type { employees_agencies, employees_agenciesId } from './employees_agencies';
import type { postal_code, postal_codeId } from './postal_code';

export interface agenciesAttributes {
  id: string;
  name: string;
  address: string;
  contact_id: string;
  postal_code_id: string;
}

export type agenciesPk = "id";
export type agenciesId = agencies[agenciesPk];
export type agenciesCreationAttributes = agenciesAttributes;

export class agencies extends Model<agenciesAttributes, agenciesCreationAttributes> implements agenciesAttributes {
  id!: string;
  name!: string;
  address!: string;
  contact_id!: string;
  postal_code_id!: string;

  // agencies hasMany employees_agencies via agencie_id
  employees_agencies!: employees_agencies[];
  getEmployees_agencies!: Sequelize.HasManyGetAssociationsMixin<employees_agencies>;
  setEmployees_agencies!: Sequelize.HasManySetAssociationsMixin<employees_agencies, employees_agenciesId>;
  addEmployees_agency!: Sequelize.HasManyAddAssociationMixin<employees_agencies, employees_agenciesId>;
  addEmployees_agencies!: Sequelize.HasManyAddAssociationsMixin<employees_agencies, employees_agenciesId>;
  createEmployees_agency!: Sequelize.HasManyCreateAssociationMixin<employees_agencies>;
  removeEmployees_agency!: Sequelize.HasManyRemoveAssociationMixin<employees_agencies, employees_agenciesId>;
  removeEmployees_agencies!: Sequelize.HasManyRemoveAssociationsMixin<employees_agencies, employees_agenciesId>;
  hasEmployees_agency!: Sequelize.HasManyHasAssociationMixin<employees_agencies, employees_agenciesId>;
  hasEmployees_agencies!: Sequelize.HasManyHasAssociationsMixin<employees_agencies, employees_agenciesId>;
  countEmployees_agencies!: Sequelize.HasManyCountAssociationsMixin;
  // agencies belongsTo contact via contact_id
  contact!: contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<contact, contactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<contact>;
  // agencies belongsTo postal_code via postal_code_id
  postal_code!: postal_code;
  getPostal_code!: Sequelize.BelongsToGetAssociationMixin<postal_code>;
  setPostal_code!: Sequelize.BelongsToSetAssociationMixin<postal_code, postal_codeId>;
  createPostal_code!: Sequelize.BelongsToCreateAssociationMixin<postal_code>;

  static initModel(sequelize: Sequelize.Sequelize): typeof agencies {
    return agencies.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contact_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'contact',
        key: 'id'
      }
    },
    postal_code_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'postal_code',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'agencies',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "agencies_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

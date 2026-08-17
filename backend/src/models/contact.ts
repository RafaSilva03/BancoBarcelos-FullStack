import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agencies, agenciesId } from './agencies';
import type { contact_type, contact_typeId } from './contact_type';
import type { user, userId } from './user';

export interface contactAttributes {
  id: string;
  user_id: string;
  contact_type_id: string;
  contact_value: string;
}

export type contactPk = "id";
export type contactId = contact[contactPk];
export type contactCreationAttributes = contactAttributes;

export class contact extends Model<contactAttributes, contactCreationAttributes> implements contactAttributes {
  id!: string;
  user_id!: string;
  contact_type_id!: string;
  contact_value!: string;

  // contact hasMany agencies via contact_id
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
  // contact belongsTo contact_type via contact_type_id
  contact_type!: contact_type;
  getContact_type!: Sequelize.BelongsToGetAssociationMixin<contact_type>;
  setContact_type!: Sequelize.BelongsToSetAssociationMixin<contact_type, contact_typeId>;
  createContact_type!: Sequelize.BelongsToCreateAssociationMixin<contact_type>;
  // contact belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof contact {
    return contact.init({
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
    contact_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'contact_type',
        key: 'id'
      }
    },
    contact_value: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'contact',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "contact_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

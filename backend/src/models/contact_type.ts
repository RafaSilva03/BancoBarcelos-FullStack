import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contact, contactId } from './contact';

export interface contact_typeAttributes {
  id: string;
  type: string;
}

export type contact_typePk = "id";
export type contact_typeId = contact_type[contact_typePk];
export type contact_typeCreationAttributes = contact_typeAttributes;

export class contact_type extends Model<contact_typeAttributes, contact_typeCreationAttributes> implements contact_typeAttributes {
  id!: string;
  type!: string;

  // contact_type hasMany contact via contact_type_id
  contacts!: contact[];
  getContacts!: Sequelize.HasManyGetAssociationsMixin<contact>;
  setContacts!: Sequelize.HasManySetAssociationsMixin<contact, contactId>;
  addContact!: Sequelize.HasManyAddAssociationMixin<contact, contactId>;
  addContacts!: Sequelize.HasManyAddAssociationsMixin<contact, contactId>;
  createContact!: Sequelize.HasManyCreateAssociationMixin<contact>;
  removeContact!: Sequelize.HasManyRemoveAssociationMixin<contact, contactId>;
  removeContacts!: Sequelize.HasManyRemoveAssociationsMixin<contact, contactId>;
  hasContact!: Sequelize.HasManyHasAssociationMixin<contact, contactId>;
  hasContacts!: Sequelize.HasManyHasAssociationsMixin<contact, contactId>;
  countContacts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof contact_type {
    return contact_type.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'contact_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "contact_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account_notifications, account_notificationsId } from './account_notifications';
import type { contact, contactId } from './contact';
import type { employee, employeeCreationAttributes, employeeId } from './employee';
import type { employees_agencies, employees_agenciesId } from './employees_agencies';
import type { insurance_members, insurance_membersId } from './insurance_members';
import type { postal_code, postal_codeId } from './postal_code';
import type { pronoun, pronounId } from './pronoun';
import type { sex_type, sex_typeId } from './sex_type';
import type { status, statusId } from './status';
import type { transfer, transferId } from './transfer';
import type { user_bank_connector, user_bank_connectorId } from './user_bank_connector';
import type { user_privileges, user_privilegesId } from './user_privileges';

export interface userAttributes {
  id: string;
  name: string;
  pronoun_id: string;
  picture_name: string;
  dob: string;
  address: string;
  sex_type_id: string;
  postal_code_id: string;
  registration_date: string;
  status_id: string;
  nif: string;
  hashed_password: string;
}

export type userPk = "id";
export type userId = user[userPk];
export type userCreationAttributes = userAttributes;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: string;
  name!: string;
  pronoun_id!: string;
  picture_name!: string;
  dob!: string;
  address!: string;
  sex_type_id!: string;
  postal_code_id!: string;
  registration_date!: string;
  status_id!: string;
  nif!: string;
  hashed_password!: string;

  // user belongsTo postal_code via postal_code_id
  postal_code!: postal_code;
  getPostal_code!: Sequelize.BelongsToGetAssociationMixin<postal_code>;
  setPostal_code!: Sequelize.BelongsToSetAssociationMixin<postal_code, postal_codeId>;
  createPostal_code!: Sequelize.BelongsToCreateAssociationMixin<postal_code>;
  // user belongsTo pronoun via pronoun_id
  pronoun!: pronoun;
  getPronoun!: Sequelize.BelongsToGetAssociationMixin<pronoun>;
  setPronoun!: Sequelize.BelongsToSetAssociationMixin<pronoun, pronounId>;
  createPronoun!: Sequelize.BelongsToCreateAssociationMixin<pronoun>;
  // user belongsTo sex_type via sex_type_id
  sex_type!: sex_type;
  getSex_type!: Sequelize.BelongsToGetAssociationMixin<sex_type>;
  setSex_type!: Sequelize.BelongsToSetAssociationMixin<sex_type, sex_typeId>;
  createSex_type!: Sequelize.BelongsToCreateAssociationMixin<sex_type>;
  // user belongsTo status via status_id
  status!: status;
  getStatus!: Sequelize.BelongsToGetAssociationMixin<status>;
  setStatus!: Sequelize.BelongsToSetAssociationMixin<status, statusId>;
  createStatus!: Sequelize.BelongsToCreateAssociationMixin<status>;
  // user hasMany account_notifications via user_id
  account_notifications!: account_notifications[];
  getAccount_notifications!: Sequelize.HasManyGetAssociationsMixin<account_notifications>;
  setAccount_notifications!: Sequelize.HasManySetAssociationsMixin<account_notifications, account_notificationsId>;
  addAccount_notification!: Sequelize.HasManyAddAssociationMixin<account_notifications, account_notificationsId>;
  addAccount_notifications!: Sequelize.HasManyAddAssociationsMixin<account_notifications, account_notificationsId>;
  createAccount_notification!: Sequelize.HasManyCreateAssociationMixin<account_notifications>;
  removeAccount_notification!: Sequelize.HasManyRemoveAssociationMixin<account_notifications, account_notificationsId>;
  removeAccount_notifications!: Sequelize.HasManyRemoveAssociationsMixin<account_notifications, account_notificationsId>;
  hasAccount_notification!: Sequelize.HasManyHasAssociationMixin<account_notifications, account_notificationsId>;
  hasAccount_notifications!: Sequelize.HasManyHasAssociationsMixin<account_notifications, account_notificationsId>;
  countAccount_notifications!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany contact via user_id
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
  // user hasOne employee via user_id
  employee!: employee;
  getEmployee!: Sequelize.HasOneGetAssociationMixin<employee>;
  setEmployee!: Sequelize.HasOneSetAssociationMixin<employee, employeeId>;
  createEmployee!: Sequelize.HasOneCreateAssociationMixin<employee>;
  // user hasMany employees_agencies via user_id
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
  // user hasMany insurance_members via user_id
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
  // user hasMany transfer via destination_account_id
  transfers!: transfer[];
  getTransfers!: Sequelize.HasManyGetAssociationsMixin<transfer>;
  setTransfers!: Sequelize.HasManySetAssociationsMixin<transfer, transferId>;
  addTransfer!: Sequelize.HasManyAddAssociationMixin<transfer, transferId>;
  addTransfers!: Sequelize.HasManyAddAssociationsMixin<transfer, transferId>;
  createTransfer!: Sequelize.HasManyCreateAssociationMixin<transfer>;
  removeTransfer!: Sequelize.HasManyRemoveAssociationMixin<transfer, transferId>;
  removeTransfers!: Sequelize.HasManyRemoveAssociationsMixin<transfer, transferId>;
  hasTransfer!: Sequelize.HasManyHasAssociationMixin<transfer, transferId>;
  hasTransfers!: Sequelize.HasManyHasAssociationsMixin<transfer, transferId>;
  countTransfers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany transfer via source_account_id
  source_account_transfers!: transfer[];
  getSource_account_transfers!: Sequelize.HasManyGetAssociationsMixin<transfer>;
  setSource_account_transfers!: Sequelize.HasManySetAssociationsMixin<transfer, transferId>;
  addSource_account_transfer!: Sequelize.HasManyAddAssociationMixin<transfer, transferId>;
  addSource_account_transfers!: Sequelize.HasManyAddAssociationsMixin<transfer, transferId>;
  createSource_account_transfer!: Sequelize.HasManyCreateAssociationMixin<transfer>;
  removeSource_account_transfer!: Sequelize.HasManyRemoveAssociationMixin<transfer, transferId>;
  removeSource_account_transfers!: Sequelize.HasManyRemoveAssociationsMixin<transfer, transferId>;
  hasSource_account_transfer!: Sequelize.HasManyHasAssociationMixin<transfer, transferId>;
  hasSource_account_transfers!: Sequelize.HasManyHasAssociationsMixin<transfer, transferId>;
  countSource_account_transfers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_bank_connector via user_id
  user_bank_connectors!: user_bank_connector[];
  getUser_bank_connectors!: Sequelize.HasManyGetAssociationsMixin<user_bank_connector>;
  setUser_bank_connectors!: Sequelize.HasManySetAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  addUser_bank_connector!: Sequelize.HasManyAddAssociationMixin<user_bank_connector, user_bank_connectorId>;
  addUser_bank_connectors!: Sequelize.HasManyAddAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  createUser_bank_connector!: Sequelize.HasManyCreateAssociationMixin<user_bank_connector>;
  removeUser_bank_connector!: Sequelize.HasManyRemoveAssociationMixin<user_bank_connector, user_bank_connectorId>;
  removeUser_bank_connectors!: Sequelize.HasManyRemoveAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  hasUser_bank_connector!: Sequelize.HasManyHasAssociationMixin<user_bank_connector, user_bank_connectorId>;
  hasUser_bank_connectors!: Sequelize.HasManyHasAssociationsMixin<user_bank_connector, user_bank_connectorId>;
  countUser_bank_connectors!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_privileges via user_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pronoun_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'pronoun',
        key: 'id'
      }
    },
    picture_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sex_type_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'sex_type',
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
    nif: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    hashed_password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

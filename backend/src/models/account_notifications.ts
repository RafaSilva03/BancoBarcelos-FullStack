import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account, bank_accountId } from './bank_account';
import type { user, userId } from './user';

export interface account_notificationsAttributes {
  id: string;
  account_number_id: string;
  user_id: string;
}

export type account_notificationsPk = "id";
export type account_notificationsId = account_notifications[account_notificationsPk];
export type account_notificationsCreationAttributes = account_notificationsAttributes;

export class account_notifications extends Model<account_notificationsAttributes, account_notificationsCreationAttributes> implements account_notificationsAttributes {
  id!: string;
  account_number_id!: string;
  user_id!: string;

  // account_notifications belongsTo bank_account via account_number_id
  account_number!: bank_account;
  getAccount_number!: Sequelize.BelongsToGetAssociationMixin<bank_account>;
  setAccount_number!: Sequelize.BelongsToSetAssociationMixin<bank_account, bank_accountId>;
  createAccount_number!: Sequelize.BelongsToCreateAssociationMixin<bank_account>;
  // account_notifications belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account_notifications {
    return account_notifications.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    account_number_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bank_account',
        key: 'account_number'
      }
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'account_notifications',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "account_notifications_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

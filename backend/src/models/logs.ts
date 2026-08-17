import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { action, actionId } from './action';

export interface logsAttributes {
  id: string;
  user_id: string;
  details: string;
  action_id: string;
}

export type logsPk = "id";
export type logsId = logs[logsPk];
export type logsCreationAttributes = logsAttributes;

export class logs extends Model<logsAttributes, logsCreationAttributes> implements logsAttributes {
  id!: string;
  user_id!: string;
  details!: string;
  action_id!: string;

  // logs belongsTo action via action_id
  action!: action;
  getAction!: Sequelize.BelongsToGetAssociationMixin<action>;
  setAction!: Sequelize.BelongsToSetAssociationMixin<action, actionId>;
  createAction!: Sequelize.BelongsToCreateAssociationMixin<action>;

  static initModel(sequelize: Sequelize.Sequelize): typeof logs {
    return logs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    action_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'action',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'logs',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

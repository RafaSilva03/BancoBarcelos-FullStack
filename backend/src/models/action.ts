import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { logs, logsId } from './logs';

export interface actionAttributes {
  id: string;
  name: string;
}

export type actionPk = "id";
export type actionId = action[actionPk];
export type actionCreationAttributes = actionAttributes;

export class action extends Model<actionAttributes, actionCreationAttributes> implements actionAttributes {
  id!: string;
  name!: string;

  // action hasMany logs via action_id
  logs!: logs[];
  getLogs!: Sequelize.HasManyGetAssociationsMixin<logs>;
  setLogs!: Sequelize.HasManySetAssociationsMixin<logs, logsId>;
  addLog!: Sequelize.HasManyAddAssociationMixin<logs, logsId>;
  addLogs!: Sequelize.HasManyAddAssociationsMixin<logs, logsId>;
  createLog!: Sequelize.HasManyCreateAssociationMixin<logs>;
  removeLog!: Sequelize.HasManyRemoveAssociationMixin<logs, logsId>;
  removeLogs!: Sequelize.HasManyRemoveAssociationsMixin<logs, logsId>;
  hasLog!: Sequelize.HasManyHasAssociationMixin<logs, logsId>;
  hasLogs!: Sequelize.HasManyHasAssociationsMixin<logs, logsId>;
  countLogs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof action {
    return action.init({
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
    tableName: 'action',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "action_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

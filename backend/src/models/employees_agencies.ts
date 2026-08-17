import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { agencies, agenciesId } from './agencies';
import type { user, userId } from './user';

export interface employees_agenciesAttributes {
  id: string;
  user_id: string;
  agencie_id: string;
}

export type employees_agenciesPk = "id";
export type employees_agenciesId = employees_agencies[employees_agenciesPk];
export type employees_agenciesCreationAttributes = employees_agenciesAttributes;

export class employees_agencies extends Model<employees_agenciesAttributes, employees_agenciesCreationAttributes> implements employees_agenciesAttributes {
  id!: string;
  user_id!: string;
  agencie_id!: string;

  // employees_agencies belongsTo agencies via agencie_id
  agencie!: agencies;
  getAgencie!: Sequelize.BelongsToGetAssociationMixin<agencies>;
  setAgencie!: Sequelize.BelongsToSetAssociationMixin<agencies, agenciesId>;
  createAgencie!: Sequelize.BelongsToCreateAssociationMixin<agencies>;
  // employees_agencies belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof employees_agencies {
    return employees_agencies.init({
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
    agencie_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'agencies',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'employees_agencies',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "employees_agencies_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

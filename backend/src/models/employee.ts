import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface employeeAttributes {
  user_id: string;
  role_id: string;
  salary: number;
}

export type employeePk = "user_id";
export type employeeId = employee[employeePk];
export type employeeCreationAttributes = employeeAttributes;

export class employee extends Model<employeeAttributes, employeeCreationAttributes> implements employeeAttributes {
  user_id!: string;
  role_id!: string;
  salary!: number;

  // employee belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof employee {
    return employee.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    salary: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface withdraw_deposit_atmAttributes {
  id: string;
  ammount: number;
  atm_code: string;
  sign: string;
  description: string;
  date: string;
}

export type withdraw_deposit_atmPk = "id";
export type withdraw_deposit_atmId = withdraw_deposit_atm[withdraw_deposit_atmPk];
export type withdraw_deposit_atmCreationAttributes = withdraw_deposit_atmAttributes;

export class withdraw_deposit_atm extends Model<withdraw_deposit_atmAttributes, withdraw_deposit_atmCreationAttributes> implements withdraw_deposit_atmAttributes {
  id!: string;
  ammount!: number;
  atm_code!: string;
  sign!: string;
  description!: string;
  date!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof withdraw_deposit_atm {
    return withdraw_deposit_atm.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    ammount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    atm_code: {
      type: DataTypes.UUID,
      allowNull: false
    },
    sign: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'withdraw_deposit_atm',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "withdraw_deposit_atm_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

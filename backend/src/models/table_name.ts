import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { bank_account_movements, bank_account_movementsId } from './bank_account_movements';

export interface table_nameAttributes {
  id: string;
  name: string;
}

export type table_namePk = "id";
export type table_nameId = table_name[table_namePk];
export type table_nameCreationAttributes = table_nameAttributes;

export class table_name extends Model<table_nameAttributes, table_nameCreationAttributes> implements table_nameAttributes {
  id!: string;
  name!: string;

  // table_name hasMany bank_account_movements via table_name_id
  bank_account_movements!: bank_account_movements[];
  getBank_account_movements!: Sequelize.HasManyGetAssociationsMixin<bank_account_movements>;
  setBank_account_movements!: Sequelize.HasManySetAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  addBank_account_movement!: Sequelize.HasManyAddAssociationMixin<bank_account_movements, bank_account_movementsId>;
  addBank_account_movements!: Sequelize.HasManyAddAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  createBank_account_movement!: Sequelize.HasManyCreateAssociationMixin<bank_account_movements>;
  removeBank_account_movement!: Sequelize.HasManyRemoveAssociationMixin<bank_account_movements, bank_account_movementsId>;
  removeBank_account_movements!: Sequelize.HasManyRemoveAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  hasBank_account_movement!: Sequelize.HasManyHasAssociationMixin<bank_account_movements, bank_account_movementsId>;
  hasBank_account_movements!: Sequelize.HasManyHasAssociationsMixin<bank_account_movements, bank_account_movementsId>;
  countBank_account_movements!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof table_name {
    return table_name.init({
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
    tableName: 'table_name',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "table_name_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

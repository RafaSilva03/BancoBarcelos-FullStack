import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { recurring_transfer, recurring_transferId } from './recurring_transfer';

export interface period_typeAttributes {
  id: string;
  type: string;
}

export type period_typePk = "id";
export type period_typeId = period_type[period_typePk];
export type period_typeCreationAttributes = period_typeAttributes;

export class period_type extends Model<period_typeAttributes, period_typeCreationAttributes> implements period_typeAttributes {
  id!: string;
  type!: string;

  // period_type hasMany recurring_transfer via period_type_id
  recurring_transfers!: recurring_transfer[];
  getRecurring_transfers!: Sequelize.HasManyGetAssociationsMixin<recurring_transfer>;
  setRecurring_transfers!: Sequelize.HasManySetAssociationsMixin<recurring_transfer, recurring_transferId>;
  addRecurring_transfer!: Sequelize.HasManyAddAssociationMixin<recurring_transfer, recurring_transferId>;
  addRecurring_transfers!: Sequelize.HasManyAddAssociationsMixin<recurring_transfer, recurring_transferId>;
  createRecurring_transfer!: Sequelize.HasManyCreateAssociationMixin<recurring_transfer>;
  removeRecurring_transfer!: Sequelize.HasManyRemoveAssociationMixin<recurring_transfer, recurring_transferId>;
  removeRecurring_transfers!: Sequelize.HasManyRemoveAssociationsMixin<recurring_transfer, recurring_transferId>;
  hasRecurring_transfer!: Sequelize.HasManyHasAssociationMixin<recurring_transfer, recurring_transferId>;
  hasRecurring_transfers!: Sequelize.HasManyHasAssociationsMixin<recurring_transfer, recurring_transferId>;
  countRecurring_transfers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof period_type {
    return period_type.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'period_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "period_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

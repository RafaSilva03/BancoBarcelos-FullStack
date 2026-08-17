import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface transferAttributes {
  id: string;
  source_account_id: string;
  destination_account_id: string;
  ammount: number;
  tax_fee: number;
  date: string;
  description: string;
}

export type transferPk = "id";
export type transferId = transfer[transferPk];
export type transferCreationAttributes = transferAttributes;

export class transfer extends Model<transferAttributes, transferCreationAttributes> implements transferAttributes {
  id!: string;
  source_account_id!: string;
  destination_account_id!: string;
  ammount!: number;
  tax_fee!: number;
  date!: string;
  description!: string;

  // transfer belongsTo user via destination_account_id
  destination_account!: user;
  getDestination_account!: Sequelize.BelongsToGetAssociationMixin<user>;
  setDestination_account!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createDestination_account!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // transfer belongsTo user via source_account_id
  source_account!: user;
  getSource_account!: Sequelize.BelongsToGetAssociationMixin<user>;
  setSource_account!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createSource_account!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof transfer {
    return transfer.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    source_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    destination_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    ammount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tax_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transfer',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "transfer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

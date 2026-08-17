import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { insurance, insuranceId } from './insurance';
import type { user, userId } from './user';

export interface insurance_membersAttributes {
  id: string;
  insurance_id: string;
  user_id: string;
}

export type insurance_membersPk = "id";
export type insurance_membersId = insurance_members[insurance_membersPk];
export type insurance_membersCreationAttributes = insurance_membersAttributes;

export class insurance_members extends Model<insurance_membersAttributes, insurance_membersCreationAttributes> implements insurance_membersAttributes {
  id!: string;
  insurance_id!: string;
  user_id!: string;

  // insurance_members belongsTo insurance via insurance_id
  insurance!: insurance;
  getInsurance!: Sequelize.BelongsToGetAssociationMixin<insurance>;
  setInsurance!: Sequelize.BelongsToSetAssociationMixin<insurance, insuranceId>;
  createInsurance!: Sequelize.BelongsToCreateAssociationMixin<insurance>;
  // insurance_members belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof insurance_members {
    return insurance_members.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    insurance_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'insurance',
        key: 'id'
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
    tableName: 'insurance_members',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "insurance_members_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

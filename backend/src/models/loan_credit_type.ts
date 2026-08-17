import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { loan_credit, loan_creditId } from './loan_credit';

export interface loan_credit_typeAttributes {
  id: string;
  type: string;
}

export type loan_credit_typePk = "id";
export type loan_credit_typeId = loan_credit_type[loan_credit_typePk];
export type loan_credit_typeCreationAttributes = loan_credit_typeAttributes;

export class loan_credit_type extends Model<loan_credit_typeAttributes, loan_credit_typeCreationAttributes> implements loan_credit_typeAttributes {
  id!: string;
  type!: string;

  // loan_credit_type hasMany loan_credit via loan_credit_type_id
  loan_credits!: loan_credit[];
  getLoan_credits!: Sequelize.HasManyGetAssociationsMixin<loan_credit>;
  setLoan_credits!: Sequelize.HasManySetAssociationsMixin<loan_credit, loan_creditId>;
  addLoan_credit!: Sequelize.HasManyAddAssociationMixin<loan_credit, loan_creditId>;
  addLoan_credits!: Sequelize.HasManyAddAssociationsMixin<loan_credit, loan_creditId>;
  createLoan_credit!: Sequelize.HasManyCreateAssociationMixin<loan_credit>;
  removeLoan_credit!: Sequelize.HasManyRemoveAssociationMixin<loan_credit, loan_creditId>;
  removeLoan_credits!: Sequelize.HasManyRemoveAssociationsMixin<loan_credit, loan_creditId>;
  hasLoan_credit!: Sequelize.HasManyHasAssociationMixin<loan_credit, loan_creditId>;
  hasLoan_credits!: Sequelize.HasManyHasAssociationsMixin<loan_credit, loan_creditId>;
  countLoan_credits!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof loan_credit_type {
    return loan_credit_type.init({
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
    tableName: 'loan_credit_type',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "loan_credit_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

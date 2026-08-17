import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { loan_credit, loan_creditId } from './loan_credit';

export interface credit_paymentAttributes {
  id: string;
  value_paid: number;
  payment_date: string;
  loan_credit_id: string;
}

export type credit_paymentPk = "id";
export type credit_paymentId = credit_payment[credit_paymentPk];
export type credit_paymentCreationAttributes = credit_paymentAttributes;

export class credit_payment extends Model<credit_paymentAttributes, credit_paymentCreationAttributes> implements credit_paymentAttributes {
  id!: string;
  value_paid!: number;
  payment_date!: string;
  loan_credit_id!: string;

  // credit_payment belongsTo loan_credit via loan_credit_id
  loan_credit!: loan_credit;
  getLoan_credit!: Sequelize.BelongsToGetAssociationMixin<loan_credit>;
  setLoan_credit!: Sequelize.BelongsToSetAssociationMixin<loan_credit, loan_creditId>;
  createLoan_credit!: Sequelize.BelongsToCreateAssociationMixin<loan_credit>;

  static initModel(sequelize: Sequelize.Sequelize): typeof credit_payment {
    return credit_payment.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    value_paid: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    loan_credit_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'loan_credit',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'credit_payment',
    schema: 'dev',
    timestamps: false,
    indexes: [
      {
        name: "credit_payment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

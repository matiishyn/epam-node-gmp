import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false, // exclude createdAt, updatedAt
})
export default class User extends Model<User> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id!: string; // or number?

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  login!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  age!: number;

  // do we need it? Better use SQLZ Paranoid (deletedAt)
  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
  })
  isDeleted!: boolean;
}

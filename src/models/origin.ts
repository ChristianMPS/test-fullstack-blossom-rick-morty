import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class Origin extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public dimension!: string;
}

Origin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    dimension: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Origin",
    tableName: "origins",
    timestamps: false,
  }
);

export default Origin;

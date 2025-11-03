import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

export class Location extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public dimension!: string;
}

Location.init(
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
    modelName: "Location",
    tableName: "locations",
    timestamps: false,
  }
);

export default Location;

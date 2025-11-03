import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Origin from "./origin";
import Location from "./location";

export class Character extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
  public species!: string;
  public type!: string;
  public gender!: string;
  public image!: string;
  public episode!: string[];
  public created!: string;
  public originId!: number;
  public locationId!: number;
}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    episode: DataTypes.JSONB,
    created: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Character",
    tableName: "characters",
    timestamps: false,
  }
);


Character.belongsTo(Origin, {
  foreignKey: "originId",
  as: "origin",
});

Character.belongsTo(Location, {
  foreignKey: "locationId",
  as: "location",
});

Origin.hasMany(Character, {
  foreignKey: "originId",
});

Location.hasMany(Character, {
  foreignKey: "locationId",
});

export default Character;

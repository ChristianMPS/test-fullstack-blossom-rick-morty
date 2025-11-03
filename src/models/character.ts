import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";



export class Character extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
  public species!: string;
  public type!: string;
  public gender!: string;
  public origin!: Record<string, any>;
  public location!: Record<string, any>;
  public image!: string;
  public episode!: string[];
  public created!: string;
}

Character.init(
  {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.JSON,
    location: DataTypes.JSON,
    image: DataTypes.STRING,
    episode: DataTypes.JSON,
    created: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Character",
    tableName: "Characters",
  }
);

export default Character;

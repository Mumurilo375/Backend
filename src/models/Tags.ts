import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Games from "./Games";
import Categories from "./Category";
import GameTag from "./GameTag";

class Tags extends Model {
    public id!: number;
    public name!: string;
}

Tags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: "tags",
        timestamps: false,
        indexes: [
            { fields: ["name"] },
        ],
    }
);

Tags.belongsToMany(Games, { through: "GameTag", foreignKey: "tag_id", as: "games" });
Tags.hasMany(GameTag, { foreignKey: "tag_id", as: "gameTags" });

export default Tags;

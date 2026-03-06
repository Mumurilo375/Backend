import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Games from "./Games";
import Categories from "./Category";

class GameCategory extends Model {
    public gameId!: number;
    public categoryId!: number;
}

GameCategory.init(
    {
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "game_id",
            primaryKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "category_id",
            primaryKey: true,
        },
    },
    {
        sequelize,
        tableName: "game_categories",
        timestamps: false,
        indexes: [
            { fields: ["game_id"] },
            { fields: ["category_id"] },
        ],
    }
);

GameCategory.belongsTo(Games, { foreignKey: "game_id", as: "game" });
GameCategory.belongsTo(Categories, { foreignKey: "category_id", as: "category" });

export default GameCategory;

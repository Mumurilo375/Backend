import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Games from "./Games";

class GameImages extends Model {
    public id!: number;
    public gameId!: number;
    public imageUrl!: string;
    public sortOrder!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

GameImages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "game_id",
        },
        imageUrl: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: "image_url",
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: "sort_order",
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "created_at",
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "updated_at",
        },
    },
    {
        sequelize,
        tableName: "game_images",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        indexes: [
            { fields: ["game_id"] },
            { fields: ["sort_order"] },
        ],
    }
);

GameImages.belongsTo(Games, { foreignKey: "game_id", as: "game" });

export default GameImages;


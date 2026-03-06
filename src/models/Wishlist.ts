import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Users from "./Users";
import Games from "./Games";

class Wishlist extends Model {
    public id!: number;
    public userId!: number;
    public gameId!: number;
    public addedAt!: Date;
}

Wishlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "game_id",
        },
        addedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: "added_at",
        },
    },
    {
        sequelize,
        tableName: "wishlists",
        timestamps: false,
        indexes: [
            { unique: true, fields: ["user_id", "game_id"] },
            { fields: ["user_id"] },
        ],
    }
);

Wishlist.belongsTo(Users, { foreignKey: "user_id", as: "user" });
Wishlist.belongsTo(Games, { foreignKey: "game_id", as: "game" });

export default Wishlist;

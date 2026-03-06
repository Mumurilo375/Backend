import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Users from "./Users";
import GamePlatformListing from "./GamePlatformListing";

class CartItem extends Model {
    public id!: number;
    public userId!: number;
    public listingId!: number;
    public addedAt!: Date;
}

CartItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
        },
        listingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "listing_id",
        },
        addedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "added_at",
        },
    },
    {
        sequelize,
        tableName: "cart_items",
        timestamps: false,
        indexes: [
            { unique: true, fields: ["user_id", "listing_id"] },
            { fields: ["user_id"] },
        ],
    }
);

CartItem.belongsTo(Users, { foreignKey: "user_id", as: "user" });
CartItem.belongsTo(GamePlatformListing, { foreignKey: "listing_id", as: "listing" });

export default CartItem;


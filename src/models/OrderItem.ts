import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Order from "./Order";
import GamePlatformListing from "./GamePlatformListing";
import GameKey from "./GameKey";
import DeliveredKey from "./DeliveredKey";

class OrderItem extends Model {
    public id!: number;
    public orderId!: number;
    public listingId!: number;
    public gameKeyId!: number | null;
    public price!: number;
    public createdAt!: Date;
}

OrderItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "order_id",
        },
        listingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "listing_id",
        },
        gameKeyId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "game_key_id",
            unique: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "created_at",
        },
    },
    {
        sequelize,
        tableName: "order_items",
        timestamps: false,
        indexes: [
            { fields: ["order_id"] },
            { fields: ["listing_id"] },
            { fields: ["game_key_id"] },
        ],
    }
);

OrderItem.belongsTo(Order, { foreignKey: "order_id", as: "order" });
OrderItem.belongsTo(GamePlatformListing, { foreignKey: "listing_id", as: "listing" });
OrderItem.belongsTo(GameKey, { foreignKey: "game_key_id", as: "gameKey" });
OrderItem.hasOne(DeliveredKey, { foreignKey: "order_item_id", as: "deliveredKey" });

export default OrderItem;


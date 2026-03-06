import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Users from "./Users";
import OrderItem from "./OrderItem";

class Order extends Model {
    public id!: number;
    public orderNumber!: string;
    public userId!: number;
    public status!: string;
    public subtotal!: number;
    public discountAmount!: number;
    public totalAmount!: number;
    public paymentMethod!: string;
    public createdAt!: Date;
}

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderNumber: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            field: "order_number",
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: "pending",
        },
        subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discountAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
            field: "discount_amount",
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: "total_amount",
        },
        paymentMethod: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: "payment_method",
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
        tableName: "orders",
        timestamps: false,
        indexes: [
            { fields: ["order_number"] },
            { fields: ["user_id"] },
            { fields: ["status"] },
            { fields: ["created_at"] },
        ],
    }
);

Order.belongsTo(Users, { foreignKey: "user_id", as: "user" });
Order.hasMany(OrderItem, { foreignKey: "order_id", as: "items" });

export default Order;


import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Review from "./Review";
import ReviewVote from "./ReviewVote";
import CartItem from "./CartItem";
import Wishlist from "./Wishlist";
import Order from "./Order";
import DeliveredKey from "./DeliveredKey";

class Users extends Model {
    public id!: number;
    public email!: string;
    public username!: string;
    public fullName!: string | null;
    public cpf!: string | null;
    public avatarUrl!: string | null;
    public isAdmin!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;
    public passwordHash!: string;
}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "password_hash",
        },
        fullName: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: "full_name",
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: true,
            unique: true,
        },
        avatarUrl: {
            type: DataTypes.STRING(500),
            allowNull: true,
            field: "avatar_url",
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: "is_admin",
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
        tableName: "users",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        indexes: [
            { fields: ["email"] },
            { fields: ["username"] },
            { fields: ["cpf"] },
        ],
    }
);

Users.hasMany(Review, { foreignKey: "user_id", as: "reviews" });
Users.hasMany(ReviewVote, { foreignKey: "user_id", as: "reviewVotes" });
Users.hasMany(CartItem, { foreignKey: "user_id", as: "cartItems" });
Users.hasMany(Wishlist, { foreignKey: "user_id", as: "wishlistItems" });
Users.hasMany(Order, { foreignKey: "user_id", as: "orders" });
Users.hasMany(DeliveredKey, { foreignKey: "user_id", as: "deliveredKeys" });

export default Users;


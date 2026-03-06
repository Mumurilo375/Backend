import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import ReviewVote from "./ReviewVote";
import Users from "./Users";
import Games from "./Games";

class Review extends Model {
    public id!: number;
    public gameId!: number;
    public userId!: number;
    public rating!: number;
    public comment!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gameId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "game_id",
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: "created_at",
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: "updated_at",
        },
    },
    {
        sequelize,
        tableName: "reviews",
        timestamps: false,
        indexes: [
            { unique: true, fields: ["game_id", "user_id"] },
            { fields: ["game_id"] },
            { fields: ["user_id"] },
            { fields: ["rating"] },
            { fields: ["created_at"] },
        ],
    }
);

Review.belongsTo(Games, { foreignKey: "game_id", as: "game" });
Review.belongsTo(Users, { foreignKey: "user_id", as: "user" });
Review.hasMany(ReviewVote, { foreignKey: "review_id", as: "votes" });

export default Review;

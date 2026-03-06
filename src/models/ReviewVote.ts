import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Review from "./Review";
import Users from "./Users";

class ReviewVote extends Model {
    public id!: number;
    public reviewId!: number;
    public userId!: number;
    public createdAt!: Date;
}

ReviewVote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        reviewId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "review_id",
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
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
        tableName: "review_votes",
        timestamps: false,
        indexes: [
            { unique: true, fields: ["review_id", "user_id"] },
            { fields: ["review_id"] },
            { fields: ["user_id"] },
        ],
    }
);

ReviewVote.belongsTo(Review, { foreignKey: "review_id", as: "review" });
ReviewVote.belongsTo(Users, { foreignKey: "user_id", as: "user" });

export default ReviewVote;


import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import GamePlatformListing from "./GamePlatformListing";

class Platform extends Model {
    public id!: number;
    public name!: string;
    public slug!: string;
    public iconUrl!: string | null;
    public isActive!: boolean;
    public createdAt!: Date;
}

Platform.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        slug: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        iconUrl: {
            type: DataTypes.STRING(500),
            allowNull: true,
            field: "icon_url",
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            field: "is_active",
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
        tableName: "platforms",
        timestamps: false,
        indexes: [
            { fields: ["name"] },
            { fields: ["slug"] },
            { fields: ["is_active"] },
        ],
    }
);

Platform.hasMany(GamePlatformListing, { foreignKey: "platform_id", as: "gameListings" });

export default Platform;


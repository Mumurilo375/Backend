import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import GameImages from "./Game_images";
import Review from "./Review";
import Wishlist from "./Wishlist";
import GamePlatformListing from "./GamePlatformListing";
import Categories from "./Category";
import Tags from "./Tags";

class Games extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public longDescription!: string;
    public releaseDate!: Date;
    public coverImageUrl!: string;
    public isActive!: boolean;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        longDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "long_description",
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "release_date",
        },
        coverImageUrl: {
            type: DataTypes.STRING(500),
            allowNull: false,
            field: "cover_image_url",
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
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "updated_at",
        },
    },
    {
        sequelize,
        tableName: "games",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        indexes: [
            { fields: ["title"] },
            { fields: ["release_date"] },
            { fields: ["is_active"] },
        ],
    }
);

Games.hasMany(GameImages, { foreignKey: "game_id", as: "images" });
Games.hasMany(Review, { foreignKey: "game_id", as: "reviews" });
Games.hasMany(Wishlist, { foreignKey: "game_id", as: "wishlists" });
Games.hasMany(GamePlatformListing, { foreignKey: "game_id", as: "platformListings" });
Games.belongsToMany(Categories, { through: "GameCategory", foreignKey: "game_id", as: "categories" });
Games.belongsToMany(Tags, { through: "GameTag", foreignKey: "game_id", as: "tags" });


export default Games;


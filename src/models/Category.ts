import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Games from "./Games";
import GameCategory from "./GameCategory";

class Categories extends Model {
    public id!: number;
    public name!: string;
}

Categories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        tableName: "categories",
        timestamps: false,
        indexes: [
            { fields: ["name"] },
        ],
    }
);

Categories.belongsToMany(Games, { through: "GameCategory", foreignKey: "category_id", as: "games" });
Categories.hasMany(GameCategory, { foreignKey: "category_id", as: "gameCategories" }); // para acessar os registros da tabela de junção diretamente, se necessário

export default Categories;


import { DataTypes, Model, ModelStatic, Optional  } from "sequelize"
import sequelizeConnection from "../db/config"

interface CategoryAttributes {
    id: number
    name: string
    slug: string
    description: string
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface CategoryInput extends Optional<CategoryAttributes, 'id' | 'slug'> {}
export interface CategoryOutput extends Required<CategoryAttributes> {}

class Category extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes{
    public id!: number
    public name!: string
    public slug!: string
    public description!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        slug: {
            type: new DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        description: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeConnection,
        // tableName: "Book",
        paranoid: true
    }
)

// Book.sync({force: true}).then(() => console.log("Node table created"));
export default Category
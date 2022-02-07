
import { DataTypes, Model, ModelStatic, Optional  } from "sequelize"
import sequelizeConnection from "../db/config"


interface BookAttributes {
    id: number
    name: string
    slug: string
    description: string
}

export interface BookInput extends Optional<BookAttributes, 'id' | 'slug'> {}

export interface BookOuput extends Required<BookAttributes> {}

export class Book extends Model<BookAttributes> {
    public id!: number
    public name!: string
    public slug!: string
    public description!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Book.init(
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
export default Book
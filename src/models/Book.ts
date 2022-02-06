
import { DataTypes, Model } from "sequelize"
import sequelizeConnection from "../db/config"


interface BookAttributes {
    id: number
    name: string
    description: string
}

export class Book extends Model<BookAttributes> {
    
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
        description: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        }
    },
    {
        sequelize: sequelizeConnection,
        tableName: "Book",
    }
)

import { DataTypes, Model } from "sequelize"
import db from "../config/database.config"

interface UserAttributes {
    id: number
    name: string
    description: string
}

export class User extends Model<UserAttributes> {}

User.init(
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
        sequelize: db,
        tableName: "User",
    }
)
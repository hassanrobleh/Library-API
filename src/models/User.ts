
import { DataTypes, Model } from "sequelize"
import db from "../config/database.config"

interface UserAttributes {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
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
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        firstName: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        lastName: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        }
    },
    {
        sequelize: db,
        tableName: "User",
    }
)
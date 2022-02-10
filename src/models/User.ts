
import { DataTypes, Model, Optional } from "sequelize"
// import db from "../db/config/database.config"
import db from "../db/config"

interface UserAttributes {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
}

// interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes> {
    declare id: number
}

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

export default User
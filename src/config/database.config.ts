
import { Sequelize } from "sequelize"

const db = new Sequelize('library', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
})

export default db;
import { Sequelize } from "sequelize"

const sequelizeConnection = new Sequelize('library', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Etc/GMT-2'
    },
    logging: false
})

export default sequelizeConnection;
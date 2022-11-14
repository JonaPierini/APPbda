import {Sequelize} from 'sequelize'
// Sequelize nos permite realizar las conexiones
const db = new Sequelize('database_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db
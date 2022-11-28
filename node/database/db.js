import {Sequelize} from 'sequelize'
// Sequelize es un orm que nos permite conectar con la base de datos phpmyadmi. Se pone como primer parametro el nombre de la base de datos, la ruta principal, la contrasenia (en este caso no tiene por eso ''), el host y el dialect que es la base de datos
const db = new Sequelize('database_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db
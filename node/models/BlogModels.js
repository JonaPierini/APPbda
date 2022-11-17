//El model es lo que representa una tabla en la base de datos.

//importamos la conexion de la base de datos
import db from "../database/db.js";
// importamos sequelize
import {DataTypes} from "sequelize";
const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    nowDate : {type: DataTypes.DATE}
})
 
export default BlogModel
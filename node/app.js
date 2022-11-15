import express from 'express'
import cors from 'cors'
//importamos la conexion a la DB
import db from './database/db.js'
//importamos las rutas
import blogRouter from './routes/routes.js'

const app = express()
 
//se configura cors y express.json para no tener errores
app.use(cors())
app.use(express.json())

//aca para usar las rutas /blogs y lo que dependa del metodo http
app.use('/blogs', blogRouter)

// para ver si funciona todo ok
app.get('/', (req, res)=> {
    res.send('Funciona - localhost:8080/phpmyadmin')
})

// esto para hacer la autentificacion a la base de datos
try{
    await db.authenticate()
    console.log('conexion exitos')
} catch (err) {
    console.log(err)
}

app.listen(8000, () => {
    console.log('Server corriendo puerto 8000')
})


// Para insertar en sql
// INSERT INTO blogs (id, title, content) VALUES
// (1, 'Título 1', 'Contenido de mi primer post'),
// (2, 'Título 2', 'Contenido de mi segundo post'),
// (3, 'Título 3', 'Contenido de mi tercer post'),
// (4, 'Título 4', 'Contenido de mi cuarto post'),
// (5, 'Título 5', 'Contenido de mi quinto post'),
// (6, 'Título 6', 'Contenido de mi sexto post');
//importamos el modelo
import BlogModel from "../models/BlogModels.js";

//motodos para el crud

//mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        //Te trae todo
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// crear un registro
export const createBlog = async (req, res) => {
    
    let id;
    // let fecha;
    let createdAt
    let fecha
  
    try{
        await BlogModel.create(req.body)
        .then((newBlog)=> {
            id = newBlog.id
            // fecha = newBlog.fecha
            fecha = newBlog.fecha
            createdAt = newBlog.createdAt
            
        })
        res.json({
            'massage': 'Registro Creado con exito',
            id:id,
            fecha:fecha,
            createdAt:createdAt,
        
        })
    } catch(error) {
        res.json({message: error.message})
    }
}

//eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            'massage': 'Registro borrado con exito'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//importamos el modelo
import BlogModel from "../models/BlogModels.js";

//motodos para el crud

//mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll() //Te trae todo
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
    try{
        await BlogModel.create(req.body)
        .then((newBlog)=> {
            id = newBlog.id
        })
        res.json({
            'massage': 'Registro Creado con exito',
            id:id
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
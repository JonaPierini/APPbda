import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog } from '../controllers/BlogControllers.js'
const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.delete('/:id', deleteBlog)

export default router
import { Router } from 'express'
import { createBook, getById } from '../controllers/Book'

const bookRouter = Router()

bookRouter.get('/:id', getById)
bookRouter.post('/', createBook)

export default bookRouter
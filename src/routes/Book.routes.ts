import { Router } from 'express'
import { createBook, getById, getAll } from '../controllers/Book'

const bookRouter = Router()

bookRouter.get('/:id', getById)
bookRouter.post('/', createBook)
bookRouter.get('/', getAll)
bookRouter.put('/', )

export default bookRouter
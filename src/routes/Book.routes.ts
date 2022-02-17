import { Router } from 'express'
import { createBook, getById, getAll, updateBook, deleteBook } from '../controllers/Book'

const bookRouter = Router()

bookRouter.get('/:id', getById)
bookRouter.post('/', createBook)
bookRouter.get('/', getAll)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)

export default bookRouter
import { Router } from 'express'
import { createBook } from '../controllers/Book'

const bookRouter = Router()

bookRouter.post('/', createBook)

export default bookRouter
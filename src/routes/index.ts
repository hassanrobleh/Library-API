import { Router } from 'express';
import bookRouter from './Book.routes'

const router = Router()

router.use('/book', bookRouter)

export default router
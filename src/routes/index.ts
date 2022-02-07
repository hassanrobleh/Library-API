import { Router } from 'express';
import  bookRouter  from './Book'

const router = Router()

router.use('/book', bookRouter)

export default router
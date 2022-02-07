import { Router, Request, Response} from 'express'
import * as bookController from '../controllers/Book'

const bookRouter = Router()

bookRouter.post('/', async (req: Request, res: Response) => {
    const body = req.body
    const result = await bookController.create(body)
    return res.status(200).send(result)
})

export default bookRouter
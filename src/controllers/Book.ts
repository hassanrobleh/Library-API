import { Request, Response } from 'express'
import {bookCreate} from '../services/Book'

export const createBook = async (req: Request, res: Response) => {
    const body = req.body
    const result = await bookCreate({...body})
    return res.status(200).send(result)
}

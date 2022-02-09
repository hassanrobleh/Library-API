import { Request, Response, NextFunction } from 'express'
import {bookCreate} from '../services/Book'

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    try {
        const result = await bookCreate({...body})
        return res.status(201).send(result)
    } catch (e) {
        next(e)
    }
}

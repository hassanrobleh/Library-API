import { Request, Response, NextFunction } from 'express'
import {bookCreate, getBookById} from '../services/Book'

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body
    try {
        const result = await bookCreate({...body})
        return res.status(201).send(result)
    } catch (e) {
        next(e)
    }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const result =  await getBookById(id)
    return res.status(200).send(result)
    // return bookByid
}

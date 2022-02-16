import { Request, Response, NextFunction } from 'express'
import {bookCreate, getBookById, getAllBook} from '../services/Book'

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
}

export const getAll = async (req: Request, res: Response, next: NextFunction) => {

    // const name = req.query.name
    // const results = await getAllBook(name)
    // const message = `La liste book a bien été récupérée`
    // return res.status(200).json({message, data:results})
    const name = req.query.name
    if(req.query.name) {
        const results = await getAllBook(name)
        const message = ` Il y a ${results.length} books qui correspondent au terme de recherche ${name}`
        return res.json({message, data: results})
    } else {
        const results = await getAllBook()
        const message = `La liste book a bien été récupérée`
        return res.status(200).json({message, data:results})
    }
}

export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id)
    const body = req.body

    

}

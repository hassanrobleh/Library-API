import {Op} from 'sequelize'
import {Book} from "../models"
import { BookInput, BookOuput } from '../models/Book'

export const bookCreate = async (book:any) => {
    const newBook = await Book.create(book)
    return newBook
}

export const getBookById = async (id: number): Promise<BookOuput> => {
    const book = await Book.findByPk(id)
    if (!book) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return book
}


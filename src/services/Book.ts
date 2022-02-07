import {Op} from 'sequelize'
import Book from "../models/Book"
import {BookInput, BookOuput} from "../models/Book"

export const create = async (payload: BookInput): Promise<BookOuput> => {
    const book = await Book.create()
    return book
}


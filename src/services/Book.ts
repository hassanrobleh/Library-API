import {Op} from 'sequelize'
import Book from "../models/Book"
// import {BookInput, BookOuput} from "../models/Book"

export const bookCreate = async (book:any) => {
    const newBook = await Book.create(book)
    return newBook
}


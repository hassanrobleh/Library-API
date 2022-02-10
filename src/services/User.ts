import {Op} from 'sequelize'
import User from "../models/User"
// import {BookInput, BookOuput} from "../models/Book"

export const bookCreate = async (book:any) => {
    const newBook = await User.create(book)
    return newBook
}


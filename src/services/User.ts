import {Op} from 'sequelize'
import User from "../models/User"

export const bookCreate = async (book:any) => {
    const newBook = await User.create(book)
    return newBook
}


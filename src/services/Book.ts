import {Op} from 'sequelize'
import {Book} from "../models"
import { GetAllBookFilters } from "./types"
import { BookInput, BookOuput } from '../models/Book'

export const bookCreate = async (book:Book): Promise<BookOuput> => {
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

export const getAllBook = async (filters?: GetAllBookFilters): Promise<BookOuput[]> => {
    return Book.findAll({
        where: { 
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}

export const update = async () => {
    
}


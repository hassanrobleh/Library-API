import {Op} from 'sequelize'
import {Book} from "../models"
import { GetAllBookFilters } from "./types"
import { BookInput, BookOuput } from '../models/Book'
import { query } from 'express'

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

export const getAllBook = async (name?: any): Promise<BookOuput[]> => {
    // const name = query.name
    if(name) {
        const allBook = await Book.findAll({where: {name: name}})
        return allBook
    } else {
        const allBook = await Book.findAll()
        return allBook
    }
    
}

export const update = async () => {
    
}


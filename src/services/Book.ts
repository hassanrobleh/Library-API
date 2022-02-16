import {Op} from 'sequelize'
import {Book} from "../models"
import { GetAllBookFilters } from "./types"
import { BookInput, BookOutput } from '../models/Book'
import { query } from 'express'

export const bookCreate = async (book:Book): Promise<BookOutput> => {
    const newBook = await Book.create(book)
    return newBook
}

export const getBookById = async (id: number): Promise<BookOutput> => {
    const book = await Book.findByPk(id)
    if (!book) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return book
}

export const getAllBook = async (name?: string | object): Promise<BookOutput[]> => {
    // const name = query.name
    if(name) {
        const allBook = await Book.findAll({where: {name: name}})
        return allBook
    } else {
        const allBook = await Book.findAll()
        return allBook
    }
    
}

export const update = async (id: number, book: any): Promise<BookOutput> => {
    const bookId = await Book.findByPk(id)
    if(!bookId) {
        throw new Error('not found')
    }

    const bookUpdate = bookId.update(book)
    return bookUpdate
}


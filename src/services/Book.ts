import {Op} from 'sequelize'
import {Book} from "../models"
import { BookInput, BookOutput } from '../models/Book'

export const bookCreate = async (book:Book): Promise<BookOutput> => {
    const newBook = await Book.create(book)
    return newBook
}

export const getBookById = async (id: number): Promise<BookOutput> => {
    const book = await Book.findByPk(id)
    if (!book) {
        throw new Error(`Le Book demande n'existe pas. Réessayez avec un autre identifiant.`)
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

export const bookUpdate = async (id: number, book: any): Promise<BookOutput> => {
    const bookId = await Book.findByPk(id)
    if(!bookId) {
        throw new Error(`Le Book demande n'existe pas. Réessayez avec un autre identifiant.`)
    }

    const bookUpdate = bookId.update(book, {where: {id: bookId}})
    return bookUpdate
}

export const bookDelete = async (id: number): Promise<any> => {
    const bookId = await Book.findByPk(id)  
    try {
        if(!bookId) {
            throw new Error(`Le Book demande n'existe pas. Réessayez avec un autre identifiant.`)
        }

        const deletedBook = await bookId.destroy()
        return deletedBook
        // console.log(id)
        
    } catch (e) {
        console.log(e)
    }
    

    
}


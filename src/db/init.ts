
// require('dotenv').config()
import { config } from 'dotenv'

import { Book } from '../models/Book'


const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    Book.sync({force: true}),
])

export default dbInit

require('dotenv').config()
// import { config } from 'dotenv'

import { Book, User, Category } from '../models'
// import { User } from '../models/User'


const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV !== 'test'

const dbInit = () => Promise.all([
    Book.sync({force: true}),
    User.sync({force: true}),
    Category.sync({force: true}),
])

export default dbInit
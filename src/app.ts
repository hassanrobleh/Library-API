import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from 'express'
import routes from './routes'
import cors from "cors"
import { Server } from 'http'
import createHttpError from 'http-errors'
// import { config } from 'dotenv'
import dbInit from './db/init'

dbInit()

// config()
const app: Application = express()
const PORT: Number = Number(process.env.PORT) || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)


// server
const server: Server = app.listen(PORT, () => {
    console.log(`Server: Server is running at http://localhost:${PORT}`);
})


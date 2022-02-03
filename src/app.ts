import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from 'express'
import { Server } from 'http'
import createHttpError from 'http-errors'
import { config } from 'dotenv'
import db from './config/database.config'

config()
const app: Application = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound())
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    })
}

app.use(errorHandler)

db.sync().then(() => {
    console.log('connect to db')
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from ts app")
})

app.post('/api/book', (req, res) => {
    console.log(req.body)

    return res.send('')
})

const PORT: Number = Number(process.env.PORT) || 3000
const server: Server = app.listen(PORT, () => {
    console.log(`Server: Server is running at http://localhost:${PORT}`);
})


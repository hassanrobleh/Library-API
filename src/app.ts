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

// Routes
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send("Hello from ts app")
// })

// app.post('/api/book', (req, res) => {
//     console.log(req.body)

//     return res.send('')
// })

// app.use((req: Request, res: Response, next: NextFunction) => {
//     next(new createHttpError.NotFound())
// })
// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//         status: err.status || 500,
//         message: err.message
//     })
// }
// app.use(errorHandler)

// db.sync().then(() => {
//     console.log('connect to db')
// })

const server: Server = app.listen(PORT, () => {
    console.log(`Server: Server is running at http://localhost:${PORT}`);
})


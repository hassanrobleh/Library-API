import express, {Request, Response, NextFunction, Application} from 'express'
import { Server } from 'http'
import createHttpError from 'http-errors'

const app: Application = express()

const PORT = 3000

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from ts app")
})

app.use((req: Request, res: Response, next: NextFunction) => {

    next(new createHttpError.NotFound())
})

// const errorHandler = (err, req, res, next) => {

// }

app.use(errorHandler)

const server: Server = app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})


import { Router, Request, Response } from 'express'

const bookRouter = Router()

bookRouter.post('/', (req: Request, res: Response) => {
    // create ingredient
    const payload:CreateIngredientDTO = req.body

    const result = await ingredientController.create(payload)
    return res.status(200).send(result)
  })

export default bookRouter
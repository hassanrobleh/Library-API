import * as service from '../services/Book'

export const create = async(book:any) => {
    const create =  await service.create(book)
    return create
}

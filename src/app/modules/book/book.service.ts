import { ICreateData, IGetAll, IGetData } from '../../../interface/main'
import { IBook } from './book.interface'
import { Book } from './book.model'

const getAllData: IGetAll<IBook> = async queryResult => {
  const { query, pagination, select, populate } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Book.find(query, select, { limit, skip, sort, populate })
  const count = await Book.countDocuments(query)

  return {
    meta: { page, limit, count },
    data: result
  }
}

const getData: IGetData<IBook> = async (id, queryResult) => {
  const { select, populate } = queryResult
  const result = await Book.findById(id, select, { populate })

  return { data: result }
}

const createData: ICreateData<IBook> = async data => {
  return await Book.create(data)
}

export const BookService = {
  getAllData,
  getData,
  createData
}

import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { IBook } from './book.interface'
import { Book } from './book.model'

const getAllData: IGetAll<IBook> = async ({ query, pagination, selector }) => {
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Book.find(query, select, { limit, skip, sort, populate })
  const count = await Book.countDocuments(query)

  return {
    meta: { page, limit, count },
    result
  }
}

const getData: IGetData<IBook> = async id => {
  const query = { _id: id }
  const result = await Book.findOne(query)

  return result
}

const createData: ICreateData<IBook> = async data => {
  const result = await Book.create(data)

  return result
}

export const BookService = {
  getAllData,
  getData,
  createData
}

import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { User } from '../user/user.model'
import { IBook } from './book.interface'
import { Book } from './book.model'

const getAllData: IGetAll<IBook> = async queryResult => {
  const { query, pagination, selector } = queryResult
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Book.find(query, select, { limit, skip, sort, populate })
  const count = await Book.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryResult,
    result
  }
}

const getData: IGetData<IBook> = async id => {
  const query = { _id: id }
  const result = await Book.findOne(query)

  return result
}

const createData: ICreateData<IBook> = async data => {
  const seller = await User.findOne({ _id: data.seller, role: 'seller' })
  if (!seller) throw new Error('Seller ID is not valid.')

  const result = await Book.create(data)

  return result
}

export const BookService = {
  getAllData,
  getData,
  createData
}

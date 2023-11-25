import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { Book } from '../book/book.model'
import { User } from '../user/user.model'
import { IOrder } from './order.interface'
import { Order } from './order.model'

const getAllData: IGetAll<IOrder> = async queryMaker => {
  const { query, pagination, selector } = queryMaker
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Order.find(query, select, { limit, skip, sort, populate })
  const count = await Order.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryMaker,
    result
  }
}

const getData: IGetData<IOrder> = async id => {
  const query = { _id: id }
  const result = await Order.findOne(query)

  return result
}

const createData: ICreateData<IOrder> = async data => {
  const book = await Book.findById(data.book)
  const buyer = await User.findOne({ _id: data.buyer, role: 'buyer' })

  if (!book) throw new Error('Book ID is not valid.')
  if (!buyer) throw new Error('Buyer ID is not valid.')

  data.bookInfo = {
    title: book.title,
    price: book.price,
    language: book.language,
    author: book.author,
    publisher: book.publisher || null,
    category: book.category || null,
    tags: book.tags || null
  }
  data.seller = book.seller

  const result = await Order.create(data)

  return result
}

export const OrderService = {
  getAllData,
  getData,
  createData
}

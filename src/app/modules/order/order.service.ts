import { ICreateData, IGetAll, IGetData } from '../../../interface/main'
import { Book } from '../book/book.model'
import { User } from '../user/user.model'
import { IOrder } from './order.interface'
import { Order } from './order.model'

const getAllData: IGetAll<IOrder> = async queryResult => {
  const { query, pagination, populate, select } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Order.find(query, select, { limit, skip, sort, populate })
  const count = await Order.countDocuments(query)

  return {
    meta: { page, limit, count },
    data: result
  }
}

const getData: IGetData<IOrder> = async (id, queryResult) => {
  const { select, populate } = queryResult
  const result = await Order.findById(id, select, { populate })

  return { data: result }
}

const createData: ICreateData<IOrder> = async data => {
  const book = await Book.findById(data.book_id)
  const buyer = await User.findOne({ _id: data.buyer_id, role: 'buyer' })

  if (!book) throw new Error('Book ID is not valid.')
  if (!buyer) throw new Error('Buyer ID is not valid.')

  const random = () => Math.floor(1000000000 + Math.random() * 9000000000).toString()

  data.title = `Order ID: #${random()}`
  data.book_details = {
    title: book.title,
    price: book.price,
    language: book.language,
    category_id: book.category_id,
    tag_ids: book.tag_ids
  }
  data.seller_id = book.seller_id
  data.transaction_id = random()

  const result = await Order.create(data)

  return result
}

export const OrderService = {
  getAllData,
  getData,
  createData
}

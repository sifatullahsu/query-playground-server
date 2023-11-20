import { Model, Types } from 'mongoose'

export type IOrder = {
  book: Types.ObjectId
  bookInfo: {
    title: string
    price: number
    language: string
    author: Types.ObjectId | null
    publisher: Types.ObjectId | null
    category: Types.ObjectId | null
    tags: Types.ObjectId[] | null
  }
  seller: Types.ObjectId
  buyer: Types.ObjectId
  purchasePrice: number
  transactionId: string
}

export type IOrderModel = Model<IOrder>

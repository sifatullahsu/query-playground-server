import { Model, Types } from 'mongoose'

export type IOrder = {
  title: string
  book_id: Types.ObjectId
  book_details: {
    title: string
    price: number
    language: string
    category_id: Types.ObjectId
    tag_ids: Types.ObjectId[]
  }
  transaction_id: string
  seller_id: Types.ObjectId
  buyer_id: Types.ObjectId
}

export type IOrderModel = Model<IOrder>

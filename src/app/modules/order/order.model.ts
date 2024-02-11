import { Schema, model } from 'mongoose'
import { xLanguage } from '../book/book.model'
import { IOrder, IOrderModel } from './order.interface'

const bookSchema = new Schema<IOrder, IOrderModel>(
  {
    title: { type: String, required: true },
    book_id: { type: Schema.Types.ObjectId, required: true, ref: 'Book' },
    book_details: {
      title: { type: String, required: true },
      price: { type: String, required: true },
      language: { type: String, enum: xLanguage, required: true },
      category_id: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
      tag_ids: [{ type: Schema.Types.ObjectId, required: true, ref: 'Tag' }]
    },
    transaction_id: { type: String, required: true },
    seller_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    buyer_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Order = model<IOrder, IOrderModel>('Order', bookSchema)

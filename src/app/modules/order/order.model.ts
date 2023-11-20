import { Schema, model } from 'mongoose'
import { xLanguage } from '../../../global/constant'
import { IOrder, IOrderModel } from './order.interface'

const bookSchema = new Schema<IOrder, IOrderModel>(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    bookInfo: {
      title: { type: String, required: true },
      price: { type: String, required: true },
      language: { type: String, enum: xLanguage, required: true },
      author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
      publisher: { type: Schema.Types.ObjectId, ref: 'Publisher', required: true },
      category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
      tags: [{ type: Schema.Types.ObjectId, ref: 'Tags', required: true }]
    },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    purchasePrice: { type: Number, required: true, min: 0 },
    transactionId: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

export const Order = model<IOrder, IOrderModel>('Order', bookSchema)

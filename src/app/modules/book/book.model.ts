import { Schema, model } from 'mongoose'
import { ILanguage } from '../../../interface/main'
import { IBook, IBookModel } from './book.interface'

export const xLanguage: ILanguage[] = ['English', 'Arabic', 'Bengali', 'Hindi', 'Spanish']

const bookSchema = new Schema<IBook, IBookModel>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    language: { type: String, enum: xLanguage, required: true },
    category_id: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
    tag_ids: [{ type: Schema.Types.ObjectId, required: true, ref: 'Tag' }],
    seller_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Book = model<IBook, IBookModel>('Book', bookSchema)

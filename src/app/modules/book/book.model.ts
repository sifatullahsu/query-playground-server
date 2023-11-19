import { Schema, model } from 'mongoose'
import { xLanguage } from '../../../global/constant'
import { slugMaker } from '../../../shared'
import { IBook, IBookModel } from './book.interface'

const bookSchema = new Schema<IBook, IBookModel>(
  {
    title: { type: String, required: true },
    slug: { type: String, default: ' ', required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    language: { type: String, enum: xLanguage, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

bookSchema.pre('save', async function () {
  this.slug = slugMaker(this.slug === ' ' ? this.title : this.slug)
})

export const Book = model<IBook, IBookModel>('Book', bookSchema)

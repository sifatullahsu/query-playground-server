import { Model, Types } from 'mongoose'
import { ILanguage } from '../../../global/types'

export type IBook = {
  title: string
  slug: string
  image: string
  price: number
  stock: number
  language: ILanguage
  author: Types.ObjectId
  publisher?: Types.ObjectId
  category?: Types.ObjectId
  tags?: Types.ObjectId[]
  seller: Types.ObjectId
}

export type IBookModel = Model<IBook>

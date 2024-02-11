import { Model, Types } from 'mongoose'
import { ILanguage } from '../../../interface/main'

export type IBook = {
  title: string
  description: string
  price: number
  language: ILanguage
  category_id: Types.ObjectId
  tag_ids: Types.ObjectId[]
  seller_id: Types.ObjectId
}

export type IBookModel = Model<IBook>

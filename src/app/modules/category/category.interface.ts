import { Model } from 'mongoose'

export type ICategory = {
  title: string
}

export type ICategoryModel = Model<ICategory>

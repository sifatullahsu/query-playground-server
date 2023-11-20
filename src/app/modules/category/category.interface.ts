import { Model } from 'mongoose'

export type ICategory = {
  title: string
  slug: string
  image: string
}

export type ICategoryModel = Model<ICategory>

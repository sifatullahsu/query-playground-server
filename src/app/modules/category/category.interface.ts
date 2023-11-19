import { Model } from 'mongoose'

export type ICategory = {
  name: string
  slug: string
  image: string
}

export type ICategoryModel = Model<ICategory>

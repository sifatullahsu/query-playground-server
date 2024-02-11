import { Schema, model } from 'mongoose'
import { ICategory, ICategoryModel } from './category.interface'

const categorySchema = new Schema<ICategory, ICategoryModel>(
  {
    title: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Category = model<ICategory, ICategoryModel>('Category', categorySchema)

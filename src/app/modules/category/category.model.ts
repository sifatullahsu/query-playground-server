import { Schema, model } from 'mongoose'
import { slugMaker } from '../../../shared'
import { ICategory, ICategoryModel } from './category.interface'

const categorySchema = new Schema<ICategory, ICategoryModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, default: ' ', required: true, unique: true },
    image: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

categorySchema.pre('save', async function () {
  this.slug = slugMaker(this.slug === ' ' ? this.name : this.slug)
})

export const Category = model<ICategory, ICategoryModel>('Category', categorySchema)

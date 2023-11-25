import { Schema, model } from 'mongoose'
import { slugMaker } from '../../../shared'
import { IAuthor, IAuthorModel } from './author.interface'

const authorSchema = new Schema<IAuthor, IAuthorModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, default: ' ', required: true, unique: true },
    image: { type: String, required: true },
    about: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

authorSchema.pre('save', async function () {
  this.slug = slugMaker(this.slug === ' ' ? this.name : this.slug)
})

export const Author = model<IAuthor, IAuthorModel>('Author', authorSchema)

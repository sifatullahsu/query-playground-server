import { Schema, model } from 'mongoose'
import { slugMaker } from '../../../shared'
import { ITag, ITagModel } from './tag.interface'

const tagSchema = new Schema<ITag, ITagModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, default: ' ', required: true, unique: true }
  },
  {
    timestamps: true
  }
)

tagSchema.pre('save', async function () {
  this.slug = slugMaker(this.slug === ' ' ? this.name : this.slug)
})

export const Tag = model<ITag, ITagModel>('Tag', tagSchema)

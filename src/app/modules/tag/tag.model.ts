import { Schema, model } from 'mongoose'
import { ITag, ITagModel } from './tag.interface'

const tagSchema = new Schema<ITag, ITagModel>(
  {
    title: { type: String, required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Tag = model<ITag, ITagModel>('Tag', tagSchema)

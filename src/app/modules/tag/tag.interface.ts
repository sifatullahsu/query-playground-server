import { Model } from 'mongoose'

export type ITag = {
  name: string
  slug: string
}

export type ITagModel = Model<ITag>

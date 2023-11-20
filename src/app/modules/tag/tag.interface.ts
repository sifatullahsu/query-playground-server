import { Model } from 'mongoose'

export type ITag = {
  title: string
  slug: string
}

export type ITagModel = Model<ITag>

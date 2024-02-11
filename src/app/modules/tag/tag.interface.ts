import { Model } from 'mongoose'

export type ITag = {
  title: string
}

export type ITagModel = Model<ITag>

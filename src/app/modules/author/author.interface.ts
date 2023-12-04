import { Model } from 'mongoose'

export type IAuthor = {
  title: string
  slug: string
  image: string
  about: string
}

export type IAuthorModel = Model<IAuthor>

import { Model } from 'mongoose'

export type IAuthor = {
  name: string
  slug: string
  image: string
  about: string
}

export type IAuthorModel = Model<IAuthor>

import { Model } from 'mongoose'

export type IPublisher = {
  title: string
  slug: string
  image: string
}

export type IPublisherModel = Model<IPublisher>

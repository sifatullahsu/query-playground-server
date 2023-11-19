import { Model } from 'mongoose'

export type IPublisher = {
  name: string
  slug: string
  image: string
}

export type IPublisherModel = Model<IPublisher>

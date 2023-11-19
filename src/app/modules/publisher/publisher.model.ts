import { Schema, model } from 'mongoose'
import { slugMaker } from '../../../shared'
import { IPublisher, IPublisherModel } from './publisher.interface'

const publisherSchema = new Schema<IPublisher, IPublisherModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, default: ' ', required: true, unique: true },
    image: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

publisherSchema.pre('save', async function () {
  this.slug = slugMaker(this.slug === ' ' ? this.name : this.slug)
})

export const Publisher = model<IPublisher, IPublisherModel>('Publisher', publisherSchema)

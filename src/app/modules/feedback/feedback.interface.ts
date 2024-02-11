import { Model, Types } from 'mongoose'

export type IFeedback = {
  title: string
  description: string
  user: Types.ObjectId
}

export type IFeedbackModel = Model<IFeedback>

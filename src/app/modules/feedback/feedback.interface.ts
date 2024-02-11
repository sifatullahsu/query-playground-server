import { Model, Types } from 'mongoose'

export type IFeedback = {
  title: string
  description: string
  user_id: Types.ObjectId
}

export type IFeedbackModel = Model<IFeedback>

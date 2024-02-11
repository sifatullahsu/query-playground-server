import { Schema, model } from 'mongoose'
import { IFeedback, IFeedbackModel } from './feedback.interface'

const feedbackSchema = new Schema<IFeedback, IFeedbackModel>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Feedback = model<IFeedback, IFeedbackModel>('Feedback', feedbackSchema)

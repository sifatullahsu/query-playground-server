import { Schema, model } from 'mongoose'
import { INote, INoteModel } from './note.interface'

const noteSchema = new Schema<INote, INoteModel>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Note = model<INote, INoteModel>('Note', noteSchema)

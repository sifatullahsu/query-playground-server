import { Model, Types } from 'mongoose'

export type INote = {
  title: string
  description: string
  user: Types.ObjectId
}

export type INoteModel = Model<INote>

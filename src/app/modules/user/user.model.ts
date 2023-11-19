import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../../config'
import { xRole } from '../../../global/constant'
import { IUser, IUserModel } from './user.interface'

const userSchema = new Schema<IUser, IUserModel>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true, select: false },
    role: { type: String, enum: xRole, required: true }
  },
  {
    timestamps: true
  }
)

userSchema.statics.hashGenerator = async password => {
  return await bcrypt.hash(password, Number(config.soltRounds))
}

userSchema.statics.checkPassword = async (givenPassword, savedPassword) => {
  return await bcrypt.compare(givenPassword, savedPassword)
}

userSchema.pre('save', async function () {
  this.password = await User.hashGenerator(this.password)
})

export const User = model<IUser, IUserModel>('User', userSchema)

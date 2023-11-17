import { Model } from 'mongoose'
import { IRole } from '../../../global/types'

export type IUser = {
  name: string
  email: string
  password: string
  role: IRole
}

export type IUserModel = {
  hashGenerator(password: string): Promise<string>
  checkPassword(givenPassword: string, savedPassword: string): Promise<boolean>
} & Model<IUser>

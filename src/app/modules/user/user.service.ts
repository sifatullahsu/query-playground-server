/* eslint-disable @typescript-eslint/no-unused-vars */
import config from '../../../config'
import { ICreateData, IGetAll, IGetData, ILogin } from '../../../global/types'
import { createToken } from '../../../shared'
import { IUser } from './user.interface'
import { User } from './user.model'

const getAllData: IGetAll<IUser> = async ({ query, pagination, selector }) => {
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await User.find(query, select, { limit, skip, sort, populate })
  const count = await User.countDocuments(query)

  return {
    meta: { page, limit, count },
    result
  }
}

const getData: IGetData<IUser> = async id => {
  const query = { _id: id }
  const result = await User.findOne(query)

  return result
}

const createData: ICreateData<IUser> = async data => {
  const result = await User.create(data)

  return result
}

export const login: ILogin = async data => {
  // get user information
  const result = await User.findOne({ email: data.email }).select('+password')
  if (!result) throw new Error('Unauthorized access')

  // password verification
  const isPasswordValid = await User.checkPassword(data.password, result.password)
  if (!isPasswordValid) throw new Error('Unauthorized access.')

  const { password: removePassword, ...userinfo } = result.toObject()

  // generate tokens
  const tokenData = { _id: userinfo._id, role: userinfo.role }
  const accessToken = createToken(tokenData, config.jwt.secret!, config.jwt.expiresIn!)

  const payload = {
    ...userinfo,
    accessToken
  }

  return payload
}

export const UserService = {
  getAllData,
  getData,
  createData,
  login
}

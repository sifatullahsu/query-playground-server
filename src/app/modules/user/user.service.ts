import { ICreateData, IGetAll, IGetData } from '../../../global/types'
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

export const UserService = {
  getAllData,
  getData,
  createData
}

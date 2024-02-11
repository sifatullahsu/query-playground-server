import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { User } from '../user/user.model'
import { IFeedback } from './feedback.interface'
import { Feedback } from './feedback.model'

const getAllData: IGetAll<IFeedback> = async queryResult => {
  const { query, pagination, populate, select } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Feedback.find(query, select, { limit, skip, sort, populate })
  const count = await Feedback.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryResult,
    result
  }
}

const getData: IGetData<IFeedback> = async id => {
  const query = { _id: id }
  const result = await Feedback.findOne(query)

  return result
}

const createData: ICreateData<IFeedback> = async data => {
  const seller = await User.countDocuments({ _id: data.user })
  if (!seller) throw new Error('User ID is not valid.')

  const result = await Feedback.create(data)

  return result
}

export const FeedbackService = {
  getAllData,
  getData,
  createData
}

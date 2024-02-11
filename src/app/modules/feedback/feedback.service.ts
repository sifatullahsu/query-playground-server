import { ICreateData, IGetAll, IGetData } from '../../../interface/main'
import { IFeedback } from './feedback.interface'
import { Feedback } from './feedback.model'

const getAllData: IGetAll<IFeedback> = async queryResult => {
  const { query, pagination, populate, select } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Feedback.find(query, select, { limit, skip, sort, populate })
  const count = await Feedback.countDocuments(query)

  return {
    meta: { page, limit, count },
    data: result
  }
}

const getData: IGetData<IFeedback> = async (id, queryResult) => {
  const { select, populate } = queryResult
  const result = await Feedback.findById(id, select, { populate })

  return { data: result }
}

const createData: ICreateData<IFeedback> = async data => {
  return await Feedback.create(data)
}

export const FeedbackService = {
  getAllData,
  getData,
  createData
}

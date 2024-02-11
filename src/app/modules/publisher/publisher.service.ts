import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { IPublisher } from './publisher.interface'
import { Publisher } from './publisher.model'

const getAllData: IGetAll<IPublisher> = async queryResult => {
  const { query, pagination, select, populate } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Publisher.find(query, select, { limit, skip, sort, populate })
  const count = await Publisher.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryResult,
    result
  }
}

const getData: IGetData<IPublisher> = async id => {
  const query = { _id: id }
  const result = await Publisher.findOne(query)

  return result
}

const createData: ICreateData<IPublisher> = async data => {
  const result = await Publisher.create(data)

  return result
}

export const PublisherService = {
  getAllData,
  getData,
  createData
}

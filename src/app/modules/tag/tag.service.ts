import { ICreateData, IGetAll, IGetData } from '../../../interface/main'
import { ITag } from './tag.interface'
import { Tag } from './tag.model'

const getAllData: IGetAll<ITag> = async queryResult => {
  const { query, pagination, select, populate } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Tag.find(query, select, { limit, skip, sort, populate })
  const count = await Tag.countDocuments(query)

  return {
    meta: { page, limit, count },
    data: result
  }
}

const getData: IGetData<ITag> = async (id, queryResult) => {
  const { select, populate } = queryResult
  const result = await Tag.findById(id, select, { populate })

  return { data: result }
}

const createData: ICreateData<ITag> = async data => {
  return await Tag.create(data)
}

export const TagService = {
  getAllData,
  getData,
  createData
}

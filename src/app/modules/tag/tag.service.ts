import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { ITag } from './tag.interface'
import { Tag } from './tag.model'

const getAllData: IGetAll<ITag> = async queryMaker => {
  const { query, pagination, selector } = queryMaker
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Tag.find(query, select, { limit, skip, sort, populate })
  const count = await Tag.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryMaker,
    result
  }
}

const getData: IGetData<ITag> = async id => {
  const query = { _id: id }
  const result = await Tag.findOne(query)

  return result
}

const createData: ICreateData<ITag> = async data => {
  const result = await Tag.create(data)

  return result
}

export const TagService = {
  getAllData,
  getData,
  createData
}

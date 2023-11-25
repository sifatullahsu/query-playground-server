import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { IAuthor } from './author.interface'
import { Author } from './author.model'

const getAllData: IGetAll<IAuthor> = async queryMaker => {
  const { query, pagination, selector } = queryMaker
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Author.find(query, select, { limit, skip, sort, populate })
  const count = await Author.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryMaker,
    result
  }
}

const getData: IGetData<IAuthor> = async id => {
  const query = { _id: id }
  const result = await Author.findOne(query)

  return result
}

const createData: ICreateData<IAuthor> = async data => {
  const result = await Author.create(data)

  return result
}

export const AuthorService = {
  getAllData,
  getData,
  createData
}

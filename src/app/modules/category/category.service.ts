import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { ICategory } from './category.interface'
import { Category } from './category.model'

const getAllData: IGetAll<ICategory> = async queryResult => {
  const { query, pagination, selector } = queryResult
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Category.find(query, select, { limit, skip, sort, populate })
  const count = await Category.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryResult,
    result
  }
}

const getData: IGetData<ICategory> = async id => {
  const query = { _id: id }
  const result = await Category.findOne(query)

  return result
}

const createData: ICreateData<ICategory> = async data => {
  const result = await Category.create(data)

  return result
}

export const CategoryService = {
  getAllData,
  getData,
  createData
}

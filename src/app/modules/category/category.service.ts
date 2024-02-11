import { ICreateData, IGetAll, IGetData } from '../../../interface/main'
import { ICategory } from './category.interface'
import { Category } from './category.model'

const getAllData: IGetAll<ICategory> = async queryResult => {
  const { query, pagination, select, populate } = queryResult
  const { page, limit, skip, sort } = pagination

  const result = await Category.find(query, select, { limit, skip, sort, populate })
  const count = await Category.countDocuments(query)

  return {
    meta: { page, limit, count },
    data: result
  }
}

const getData: IGetData<ICategory> = async (id, queryResult) => {
  const { select, populate } = queryResult
  const result = await Category.findById(id, select, { populate })

  return { data: result }
}

const createData: ICreateData<ICategory> = async data => {
  return await Category.create(data)
}

export const CategoryService = {
  getAllData,
  getData,
  createData
}

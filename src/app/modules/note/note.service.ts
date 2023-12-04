import { ICreateData, IGetAll, IGetData } from '../../../global/types'
import { User } from '../user/user.model'
import { INote } from './note.interface'
import { Note } from './note.model'

const getAllData: IGetAll<INote> = async queryResult => {
  const { query, pagination, selector } = queryResult
  const { page, limit, skip, sort } = pagination
  const { select, populate } = selector

  const result = await Note.find(query, select, { limit, skip, sort, populate })
  const count = await Note.countDocuments(query)

  return {
    meta: { page, limit, count },
    queryResult,
    result
  }
}

const getData: IGetData<INote> = async id => {
  const query = { _id: id }
  const result = await Note.findOne(query)

  return result
}

const createData: ICreateData<INote> = async data => {
  const seller = await User.countDocuments({ _id: data.user })
  if (!seller) throw new Error('User ID is not valid.')

  const result = await Note.create(data)

  return result
}

export const NoteService = {
  getAllData,
  getData,
  createData
}

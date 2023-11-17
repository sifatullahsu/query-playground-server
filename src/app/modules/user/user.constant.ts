import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IUser } from './user.interface'

export const userQuery: IQueryMakerFields<IUser, IRole> = {
  all: 'OPEN',
  filter: [
    ['name', ['$regex'], 'OPEN'],
    ['email', ['$eq', '$ne'], 'OPEN'],
    ['role', ['$eq', '$ne'], 'OPEN']
  ]
}

export const userSelector: IQuerySelectorFields = {
  select: ['password'],
  populate: []
}

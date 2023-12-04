import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { INote } from './note.interface'

export const noteQuery: IQueryMakerFields<INote, IRole> = {
  all: 'OPEN',
  filter: [
    ['title', ['$regex'], 'OPEN'],
    ['description', ['$regex'], 'OPEN'],
    ['user', ['$eq', '$ne'], 'OPEN']
  ]
}

export const noteSelector: IQuerySelectorFields = {
  select: [],
  populate: [['user', ['password']]]
}

import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IAuthor } from './author.interface'

export const authorQuery: IQueryMakerFields<IAuthor, IRole> = {
  all: 'OPEN',
  filter: [
    ['title', ['$regex'], 'OPEN'],
    ['slug', ['$eq', '$ne'], 'OPEN'],
    ['image', ['$eq', '$ne'], 'OPEN'],
    ['about', ['$regex'], 'OPEN']
  ]
}

export const authorSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}

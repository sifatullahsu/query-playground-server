import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { ICategory } from './category.interface'

export const publisherQuery: IQueryMakerFields<ICategory, IRole> = {
  all: 'OPEN',
  filter: [
    ['name', ['$regex'], 'OPEN'],
    ['slug', ['$eq', '$ne'], 'OPEN'],
    ['image', ['$eq', '$ne'], 'OPEN']
  ]
}

export const publisherSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}

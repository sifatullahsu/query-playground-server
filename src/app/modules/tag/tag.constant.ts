import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { ITag } from './tag.interface'

export const publisherQuery: IQueryMakerFields<ITag, IRole> = {
  all: 'OPEN',
  filter: [
    ['title', ['$regex'], 'OPEN'],
    ['slug', ['$eq', '$ne'], 'OPEN']
  ]
}

export const publisherSelector: IQuerySelectorFields = {
  select: [],
  populate: []
}

import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../interface/main'
import { IBook } from './book.interface'

export const bookAuthRules: AuthRules<IBook, IRole> = {
  authentication: 'OPEN',
  query: [
    ['title', ['$regex']],
    ['price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$mod']],
    ['language', ['$eq', '$ne']],
    ['category_id', ['$eq', '$ne', '$exists', '$type']],
    ['tag_ids', ['$in', '$nin', '$all', '$size']],
    ['seller_id', ['$eq', '$ne']]
  ],
  select: [],
  populate: [
    ['category_id', []],
    ['tag_ids', []],
    ['seller_id', ['password']]
  ]
}

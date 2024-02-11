import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IBook } from './book.interface'

export const bookAuthRules: AuthRules<IBook, IRole> = {
  authentication: 'OPEN',
  query: [
    ['title', ['$regex']],
    ['price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$in', '$nin']],
    ['stock', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte', '$mod']],
    ['language', ['$eq', '$ne']],
    ['author', ['$eq', '$ne', '$exists', '$type']],
    ['publisher', ['$eq', '$ne', '$exists', '$type']],
    ['category', ['$eq', '$ne', '$exists', '$type']],
    ['tags', ['$in', '$nin', '$all', '$size']],
    ['seller', ['$eq', '$ne']]
  ],
  select: [],
  populate: [
    ['author', []],
    ['publisher', []],
    ['category', []],
    ['tags', []],
    ['seller', ['password']]
  ]
}

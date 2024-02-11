import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IAuthor } from './author.interface'

export const authorAuthRules: AuthRules<IAuthor, IRole> = {
  authentication: 'OPEN',
  query: [
    ['title', ['$regex']],
    ['about', ['$regex']]
  ],
  select: [],
  populate: []
}

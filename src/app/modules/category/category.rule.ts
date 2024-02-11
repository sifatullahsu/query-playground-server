import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../interface/main'
import { ICategory } from './category.interface'

export const categoryAuthRules: AuthRules<ICategory, IRole> = {
  authentication: 'OPEN',
  query: [['title', ['$regex']]],
  select: [],
  populate: []
}

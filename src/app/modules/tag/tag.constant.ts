import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { ITag } from './tag.interface'

export const tagAuthRules: AuthRules<ITag, IRole> = {
  authentication: 'OPEN',
  query: [['title', ['$regex']]],
  select: [],
  populate: []
}

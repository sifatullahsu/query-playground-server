import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IPublisher } from './publisher.interface'

export const publisherAuthRules: AuthRules<IPublisher, IRole> = {
  authentication: 'OPEN',
  query: [['title', ['$regex']]],
  select: [],
  populate: []
}

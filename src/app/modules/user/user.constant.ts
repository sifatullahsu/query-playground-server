import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IUser } from './user.interface'

export const userAuthRules: AuthRules<IUser, IRole> = {
  authentication: 'OPEN',
  query: [
    ['name', ['$regex']],
    ['email', ['$eq', '$ne']],
    ['role', ['$eq', '$ne']]
  ],
  select: ['password'],
  populate: []
}

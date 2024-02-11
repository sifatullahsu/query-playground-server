import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { INote } from './note.interface'

export const noteAuthRules: AuthRules<INote, IRole> = {
  authentication: [[['admin', 'buyer', 'seller'], ['user']]],
  query: [
    ['title', ['$regex']],
    ['description', ['$regex']],
    ['user', ['$eq']]
  ],
  select: [],
  populate: [['user', ['password']]]
}

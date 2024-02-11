import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IFeedback } from './feedback.interface'

export const feedbackAuthRules: AuthRules<IFeedback, IRole> = {
  authentication: [
    [['admin'], 'OPEN'],
    [['buyer', 'seller'], ['user']]
  ],
  query: [['user', ['$eq']]],
  select: [],
  populate: [['user', ['password']]]
}

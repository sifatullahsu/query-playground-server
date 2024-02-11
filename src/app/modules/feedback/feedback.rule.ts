import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../interface/main'
import { IFeedback } from './feedback.interface'

export const feedbackAuthRules: AuthRules<IFeedback, IRole> = {
  authentication: [
    [['admin'], 'OPEN'],
    [['buyer', 'seller'], ['user_id']]
  ],
  query: [['user_id', ['$eq']]],
  select: [],
  populate: [['user_id', ['password']]]
}

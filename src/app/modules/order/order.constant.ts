import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IOrder } from './order.interface'

export const orderAuthRules: AuthRules<IOrder, IRole> = {
  authentication: [
    [['admin'], 'OPEN'],
    [['seller'], ['seller']],
    [['buyer'], ['buyer']]
  ],
  query: [
    ['book', ['$eq', '$ne']],
    ['bookInfo.title', ['$regex']],
    ['bookInfo.price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte']],
    ['bookInfo.language', ['$eq', '$ne']],
    ['bookInfo.author', ['$eq', '$ne']],
    ['bookInfo.publisher', ['$eq', '$ne']],
    ['bookInfo.category', ['$eq', '$ne']],
    ['bookInfo.tags', ['$in', '$nin']],
    ['seller', ['$eq', '$ne']],
    ['buyer', ['$eq', '$ne']],
    ['purchasePrice', ['$eq', '$ne']],
    ['transactionId', ['$eq', '$ne']]
  ],
  select: [],
  populate: [
    ['book', []],
    ['book.seller', ['password']],
    ['bookInfo.author', []],
    ['bookInfo.publisher', []],
    ['bookInfo.category', []],
    ['bookInfo.tags', []],
    ['buyer', ['password']],
    ['seller', ['password']]
  ]
}

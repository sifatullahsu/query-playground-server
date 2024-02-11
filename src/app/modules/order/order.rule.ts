import { AuthRules } from 'mongoose-query-maker'
import { IRole } from '../../../interface/main'
import { IOrder } from './order.interface'

export const orderAuthRules: AuthRules<IOrder, IRole> = {
  authentication: [
    [['admin'], 'OPEN'],
    [
      ['seller', 'buyer'],
      ['seller_id', 'buyer_id']
    ]
  ],
  query: [
    ['book_id', ['$eq', '$ne']],
    ['book_details.price', ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte']],
    ['book_details.language', ['$eq', '$ne']],
    ['book_details.category_id', ['$eq', '$ne']],
    ['book_details.tag_ids', ['$in', '$nin']],
    ['transaction_id', ['$eq', '$ne']],
    ['seller_id', ['$eq', '$ne']],
    ['buyer_id', ['$eq', '$ne']]
  ],
  select: [],
  populate: [
    ['book_id', []],
    ['book_id.seller_id', ['password']],
    ['book_details.category_id', []],
    ['book_details.tag_ids', []],
    ['seller_id', ['password']],
    ['buyer_id', ['password']]
  ]
}

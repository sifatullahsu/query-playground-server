import { IQueryMakerFields, IQuerySelectorFields } from 'mongoose-query-maker'
import { IRole } from '../../../global/types'
import { IOrder } from './order.interface'

export const orderQuery: IQueryMakerFields<IOrder, IRole> = {
  all: ['admin'],
  filter: [
    [
      'book',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.title',
      ['$regex'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.price',
      ['$eq', '$ne', '$gt', '$gte', '$lt', '$lte'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.language',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.author',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.publisher',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.category',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'bookInfo.tags',
      ['$in', '$nin'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'seller',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'buyer',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'purchasePrice',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ],
    [
      'transactionId',
      ['$eq', '$ne'],
      [
        ['admin', 'OPEN'],
        ['seller', 'seller'],
        ['buyer', 'buyer']
      ]
    ]
  ]
}

export const orderSelector: IQuerySelectorFields = {
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

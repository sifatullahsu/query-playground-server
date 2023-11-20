import express from 'express'
import { AuthorRoute } from '../modules/author/author.route'
import { BookRoute } from '../modules/book/book.route'
import { CategoryRoute } from '../modules/category/category.route'
import { OrderRoute } from '../modules/order/order.route'
import { PublisherRoute } from '../modules/publisher/publisher.route'
import { TagRoute } from '../modules/tag/tag.route'
import { UserRoute } from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users', UserRoute)
AppRouter.use('/api/v1/authors', AuthorRoute)
AppRouter.use('/api/v1/publishers', PublisherRoute)
AppRouter.use('/api/v1/categories', CategoryRoute)
AppRouter.use('/api/v1/tags', TagRoute)
AppRouter.use('/api/v1/books', BookRoute)
AppRouter.use('/api/v1/orders', OrderRoute)

export default AppRouter

import express from 'express'
import { BookRoute } from '../modules/book/book.route'
import { CategoryRoute } from '../modules/category/category.route'
import { FeedbackRoute } from '../modules/feedback/feedback.route'
import { OrderRoute } from '../modules/order/order.route'
import { TagRoute } from '../modules/tag/tag.route'
import { UserRoute } from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users', UserRoute)
AppRouter.use('/api/v1/categories', CategoryRoute)
AppRouter.use('/api/v1/tags', TagRoute)
AppRouter.use('/api/v1/books', BookRoute)
AppRouter.use('/api/v1/orders', OrderRoute)
AppRouter.use('/api/v1/feedbacks', FeedbackRoute)

export default AppRouter

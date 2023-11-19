import express from 'express'
import { AuthorRoute } from '../modules/author/author.route'
import { PublisherRoute } from '../modules/publisher/publisher.route'
import { UserRoute } from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users', UserRoute)
AppRouter.use('/api/v1/authors', AuthorRoute)
AppRouter.use('/api/v1/publishers', PublisherRoute)

export default AppRouter

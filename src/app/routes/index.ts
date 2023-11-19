import express from 'express'
import { AuthorRoute } from '../modules/author/author.route'
import { UserRoute } from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users', UserRoute)
AppRouter.use('/api/v1/authors', AuthorRoute)

export default AppRouter

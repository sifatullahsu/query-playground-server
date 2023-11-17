import express from 'express'
import { UserRoute } from '../modules/user/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users', UserRoute)

export default AppRouter

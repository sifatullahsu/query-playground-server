import { Router } from 'express'
import { validateRole } from '../../middlewares'
import { UserController as controller } from './user.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', validateRole(['super_admin']), controller.createData)

export const UserRoute = router

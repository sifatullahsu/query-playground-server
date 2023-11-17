import { Router } from 'express'
import { UserController as controller } from './user.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)

export const UserRoute = router

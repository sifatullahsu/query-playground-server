import { Router } from 'express'
import { validateRole } from '../../middlewares'
import { AuthorController as controller } from './author.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', validateRole(['super_admin']), controller.createData)

export const AuthorRoute = router

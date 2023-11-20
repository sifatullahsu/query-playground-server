import { Router } from 'express'
import { validateRole } from '../../middlewares'
import { CategoryController as controller } from './category.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', validateRole(['super_admin']), controller.createData)

export const CategoryRoute = router

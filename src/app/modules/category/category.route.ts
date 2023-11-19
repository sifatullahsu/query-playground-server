import { Router } from 'express'
import { CategoryController as controller } from './category.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)

export const CategoryRoute = router

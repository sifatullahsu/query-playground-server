import { Router } from 'express'
import { validateRole } from '../../middlewares'
import { BookController as controller } from './book.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', validateRole(['super_admin']), controller.createData)

export const BookRoute = router

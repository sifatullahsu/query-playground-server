import { Router } from 'express'
import { BookController as controller } from './book.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)

export const BookRoute = router

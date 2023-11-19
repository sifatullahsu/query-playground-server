import { Router } from 'express'
import { AuthorController as controller } from './author.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)

export const AuthorRoute = router

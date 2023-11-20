import { Router } from 'express'
import { validateRole } from '../../middlewares'
import { TagController as controller } from './tag.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', validateRole(['super_admin']), controller.createData)

export const TagRoute = router

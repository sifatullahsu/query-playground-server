import { Router } from 'express'
import { validateRole } from '../../middlewares/validateRole'
import { FeedbackController as controller } from './feedback.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', validateRole(['super_admin']), controller.createData)

export const FeedbackRoute = router

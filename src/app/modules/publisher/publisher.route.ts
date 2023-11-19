import { Router } from 'express'
import { PublisherController as controller } from './publisher.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)

export const PublisherRoute = router

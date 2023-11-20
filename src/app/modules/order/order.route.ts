import { Router } from 'express'
import { OrderController as controller } from './order.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)

export const OrderRoute = router

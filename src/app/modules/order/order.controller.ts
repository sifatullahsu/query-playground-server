import asyncHandler from 'express-async-handler'
import { queryMaker, querySelector } from 'mongoose-query-maker'
import { orderAuthRules } from './order.rule'
import { OrderService as service } from './order.service'

const getAllData = asyncHandler(async (req, res) => {
  const queryResult = queryMaker(req.query, req.user, orderAuthRules)
  const { meta, data } = await service.getAllData(queryResult)

  res.status(200).json({
    success: true,
    message: 'Orders fetched successfull.',
    meta,
    data,
    queryResult
  })
})

const getData = asyncHandler(async (req, res) => {
  const queryResult = querySelector(req.query, orderAuthRules)
  const { data } = await service.getData(req.params.id, queryResult)

  res.status(200).json({
    success: true,
    message: 'Order fetched successfull.',
    data,
    queryResult
  })
})

const createData = asyncHandler(async (req, res) => {
  const result = await service.createData(req.body)

  res.status(200).json({
    success: true,
    message: 'Order created successfull.',
    data: result
  })
})

export const OrderController = {
  getAllData,
  getData,
  createData
}

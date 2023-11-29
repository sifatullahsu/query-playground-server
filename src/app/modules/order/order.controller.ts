import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { orderQuery, orderSelector } from './order.constant'
import { IOrder } from './order.interface'
import { OrderService as service } from './order.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, orderQuery, orderSelector)
  const { result, meta, queryResult } = await service.getAllData(query)

  apiResponse<IOrder[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Orders fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<IOrder>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Order fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<IOrder>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Order created successfull.',
    data: result
  })
})

export const OrderController = {
  getAllData,
  getData,
  createData
}

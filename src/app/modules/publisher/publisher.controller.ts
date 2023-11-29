import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { publisherQuery, publisherSelector } from './publisher.constant'
import { IPublisher } from './publisher.interface'
import { PublisherService as service } from './publisher.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, publisherQuery, publisherSelector)
  const { result, meta, queryResult } = await service.getAllData(query)

  apiResponse<IPublisher[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Publishers fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<IPublisher>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Publisher fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<IPublisher>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Publisher created successfull.',
    data: result
  })
})

export const PublisherController = {
  getAllData,
  getData,
  createData
}

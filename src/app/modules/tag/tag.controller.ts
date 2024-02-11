import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { tagAuthRules } from './tag.constant'
import { ITag } from './tag.interface'
import { TagService as service } from './tag.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const options = queryMaker(req.query, req.user, tagAuthRules)
  const { result, meta, queryResult } = await service.getAllData(options)

  apiResponse<ITag[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Tags fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<ITag>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Tag fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<ITag>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Tag created successfull.',
    data: result
  })
})

export const TagController = {
  getAllData,
  getData,
  createData
}

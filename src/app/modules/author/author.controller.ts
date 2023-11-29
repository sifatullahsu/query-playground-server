import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { authorQuery, authorSelector } from './author.constant'
import { IAuthor } from './author.interface'
import { AuthorService as service } from './author.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, authorQuery, authorSelector)
  const { result, meta, queryResult } = await service.getAllData(query)

  apiResponse<IAuthor[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Authors fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<IAuthor>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Author fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<IAuthor>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Author created successfull.',
    data: result
  })
})

export const AuthorController = {
  getAllData,
  getData,
  createData
}

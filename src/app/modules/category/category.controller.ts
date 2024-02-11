import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { categoryAuthRules } from './category.constant'
import { ICategory } from './category.interface'
import { CategoryService as service } from './category.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, categoryAuthRules)
  const { result, meta, queryResult } = await service.getAllData(query)

  apiResponse<ICategory[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Categories fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<ICategory>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Category fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<ICategory>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Category created successfull.',
    data: result
  })
})

export const CategoryController = {
  getAllData,
  getData,
  createData
}

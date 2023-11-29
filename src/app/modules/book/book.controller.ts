import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { bookQuery, bookSelector } from './book.constant'
import { IBook } from './book.interface'
import { BookService as service } from './book.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, bookQuery, bookSelector)
  const { result, meta, queryResult } = await service.getAllData(query)

  apiResponse<IBook[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Books fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<IBook>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<IBook>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Book created successfull.',
    data: result
  })
})

export const BookController = {
  getAllData,
  getData,
  createData
}

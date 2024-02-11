import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { queryMaker, querySelector } from 'mongoose-query-maker'
import { bookAuthRules } from './book.rule'
import { BookService as service } from './book.service'

const getAllData = asyncHandler(async (req: Request, res: Response) => {
  const queryResult = queryMaker(req.query, req.user, bookAuthRules)
  const { meta, data } = await service.getAllData(queryResult)

  res.status(200).json({
    success: true,
    message: 'Books fetched successfull.',
    meta,
    data,
    queryResult
  })
})

const getData = asyncHandler(async (req: Request, res: Response) => {
  const queryResult = querySelector(req.query, bookAuthRules)
  const { data } = await service.getData(req.params.id, queryResult)

  res.status(200).json({
    success: true,
    message: 'Book fetched successfull.',
    data,
    queryResult
  })
})

const createData = asyncHandler(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  res.status(200).json({
    success: true,
    message: 'Book created successfull.',
    data: result
  })
})

export const BookController = {
  getAllData,
  getData,
  createData
}

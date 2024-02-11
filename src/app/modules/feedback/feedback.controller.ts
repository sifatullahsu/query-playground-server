import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { feedbackAuthRules } from './feedback.constant'
import { IFeedback } from './feedback.interface'
import { FeedbackService as service } from './feedback.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const options = queryMaker(req.query, req.user, feedbackAuthRules)
  const { result, meta, queryResult } = await service.getAllData(options)

  apiResponse<IFeedback[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedbacks fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<IFeedback>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<IFeedback>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Feedback created successfull.',
    data: result
  })
})

export const FeedbackController = {
  getAllData,
  getData,
  createData
}

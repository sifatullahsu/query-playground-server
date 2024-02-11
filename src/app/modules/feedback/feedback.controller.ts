import asyncHandler from 'express-async-handler'
import { queryMaker, querySelector } from 'mongoose-query-maker'
import { feedbackAuthRules } from './feedback.rule'
import { FeedbackService as service } from './feedback.service'

const getAllData = asyncHandler(async (req, res) => {
  const queryResult = queryMaker(req.query, req.user, feedbackAuthRules)
  const { meta, data } = await service.getAllData(queryResult)

  res.status(200).json({
    success: true,
    message: 'Feedbacks fetched successfull.',
    meta,
    data,
    queryResult
  })
})

const getData = asyncHandler(async (req, res) => {
  const queryResult = querySelector(req.query, feedbackAuthRules)
  const { data } = await service.getData(req.params.id, queryResult)

  res.status(200).json({
    success: true,
    message: 'Feedback fetched successfull.',
    data,
    queryResult
  })
})

const createData = asyncHandler(async (req, res) => {
  const result = await service.createData(req.body)

  res.status(200).json({
    success: true,
    message: 'Feedback created successfull.',
    data: result
  })
})

export const FeedbackController = {
  getAllData,
  getData,
  createData
}

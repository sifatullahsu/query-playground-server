import asyncHandler from 'express-async-handler'
import { queryMaker, querySelector } from 'mongoose-query-maker'
import { tagAuthRules } from './tag.rule'
import { TagService as service } from './tag.service'

const getAllData = asyncHandler(async (req, res) => {
  const queryResult = queryMaker(req.query, req.user, tagAuthRules)
  const { meta, data } = await service.getAllData(queryResult)

  res.status(200).json({
    success: true,
    message: 'Tags fetched successfull.',
    meta,
    data,
    queryResult
  })
})

const getData = asyncHandler(async (req, res) => {
  const queryResult = querySelector(req.query, tagAuthRules)
  const { data } = await service.getData(req.params.id, queryResult)

  res.status(200).json({
    success: true,
    message: 'Tag fetched successfull.',
    data,
    queryResult
  })
})

const createData = asyncHandler(async (req, res) => {
  const result = await service.createData(req.body)

  res.status(200).json({
    success: true,
    message: 'Tag created successfull.',
    data: result
  })
})

export const TagController = {
  getAllData,
  getData,
  createData
}

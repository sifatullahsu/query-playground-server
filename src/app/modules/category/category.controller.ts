import asyncHandler from 'express-async-handler'
import { queryMaker, querySelector } from 'mongoose-query-maker'
import { categoryAuthRules } from './category.rule'
import { CategoryService as service } from './category.service'

const getAllData = asyncHandler(async (req, res) => {
  const queryResult = queryMaker(req.query, req.user, categoryAuthRules)
  const { meta, data } = await service.getAllData(queryResult)

  res.status(200).json({
    success: true,
    message: 'Categories fetched successfull.',
    meta,
    data,
    queryResult
  })
})

const getData = asyncHandler(async (req, res) => {
  const queryResult = querySelector(req.query, categoryAuthRules)
  const { data } = await service.getData(req.params.id, queryResult)

  res.status(200).json({
    success: true,
    message: 'Category fetched successfull.',
    data,
    queryResult
  })
})

const createData = asyncHandler(async (req, res) => {
  const result = await service.createData(req.body)

  res.status(200).json({
    success: true,
    message: 'Category created successfull.',
    data: result
  })
})

export const CategoryController = {
  getAllData,
  getData,
  createData
}

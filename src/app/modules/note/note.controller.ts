import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { noteAuthRules } from './note.constant'
import { INote } from './note.interface'
import { NoteService as service } from './note.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const options = queryMaker(req.query, req.user, noteAuthRules)
  const { result, meta, queryResult } = await service.getAllData(options)

  apiResponse<INote[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Notes fetched successfull.',
    data: result,
    meta,
    queryResult
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<INote>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Note fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<INote>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Note created successfull.',
    data: result
  })
})

export const NoteController = {
  getAllData,
  getData,
  createData
}

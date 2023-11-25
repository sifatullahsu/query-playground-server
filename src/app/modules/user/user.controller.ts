import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { queryMaker } from 'mongoose-query-maker'
import apiResponse from '../../../shared/files/apiResponse'
import catchAsync from '../../../shared/files/catchAsync'
import { userQuery, userSelector } from './user.constant'
import { IUser } from './user.interface'
import { UserService as service } from './user.service'

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = queryMaker(req.query, req.user, userQuery, userSelector)
  const { result, meta } = await service.getAllData(query)

  apiResponse<IUser[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Users fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<IUser>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User fetched successfull.',
    data: result
  })
})

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<Partial<IUser>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User created successfull.',
    data: result
  })
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await service.login(req.body)

  apiResponse<Partial<IUser>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User login successfull.',
    data: result
  })
})

export const UserController = {
  getAllData,
  getData,
  createData,
  login
}

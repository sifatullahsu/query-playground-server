import { Response } from 'express'
import { IMeta } from '../../global/types'

type IApiReponse<T> = {
  success: boolean
  status: number
  message: string
  meta?: IMeta
  data: T | null
}

const apiResponse = <T>(res: Response, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    success: data.success,
    status: data.status,
    message: data.message,
    meta: data?.meta && {
      page: data?.meta?.page,
      limit: data?.meta?.limit,
      count: data?.meta?.count
    },
    data: data.data
  }

  res.status(data.status).json(responseData)
}

export default apiResponse

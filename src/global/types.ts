import { Types } from 'mongoose'
import { IQueryMaker } from 'mongoose-query-maker'

export type IRole = 'super_admin' | 'admin' | 'seller' | 'buyer'

export type IMeta = {
  page: number
  limit: number
  count: number
}

export type IGetAll<T> = (data: IQueryMaker) => Promise<{
  meta: IMeta
  result: T[]
}>

export type IGetData<T> = (id: string) => Promise<T | null>

export type ICreateData<T> = (data: T) => Promise<T | Partial<T>>

export type ILogin = (data: { email: string; password: string }) => Promise<{
  _id: Types.ObjectId
  name: string
  email: string
  role: IRole
  accessToken: string
}>

export type ILanguage =
  | 'English'
  | 'Arabic'
  | 'Mandarin'
  | 'Hindi'
  | 'Spanish'
  | 'French'
  | 'Russian'
  | 'Portuguese'
  | 'Bengali'

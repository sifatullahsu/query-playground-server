import { Types } from 'mongoose'
import { QueryMaker, QuerySelector } from 'mongoose-query-maker'

export type IRole = 'super_admin' | 'admin' | 'seller' | 'buyer'

export type IMeta = {
  page: number
  limit: number
  count: number
}

export type IGetAll<T> = (queryResult: QueryMaker) => Promise<{
  meta: IMeta
  data: T[]
}>

export type IGetData<T> = (id: string, queryResult: QuerySelector) => Promise<{ data: T | null }>

export type ICreateData<T> = (data: T) => Promise<T | Partial<T>>

export type ILogin = (data: { email: string; password: string }) => Promise<{
  _id: Types.ObjectId
  name: string
  email: string
  role: IRole
  accessToken: string
}>

export type ILanguage = 'English' | 'Arabic' | 'Bengali' | 'Hindi' | 'Spanish'

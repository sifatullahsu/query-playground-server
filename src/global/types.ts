import { IQueryMaker } from 'mongoose-query-maker'

export type IRole = 'admin' | 'seller' | 'buyer'

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

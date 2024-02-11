import { NextFunction, Request, Response } from 'express'
import { IRole } from '../../interface/main'

export const validateRole = (roles: IRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) throw new Error('Unauthorized access')
      if (!roles.includes(req.user.role)) throw new Error('Forbidden access')

      next()
    } catch (error) {
      next(error)
    }
  }
}

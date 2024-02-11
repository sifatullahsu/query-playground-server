import { JwtPayload } from 'jsonwebtoken'
import { IRole } from './main'

export type IJwtUser = JwtPayload & {
  _id: string
  email: string
  role: IRole
}

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Request {
      user: IJwtUser | null
    }
  }
}

import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

type ICreateToken = (paylod: Record<string, unknown>, secret: string, expireTime: string) => string
type IVerifyToken = (token: string, secret: Secret) => JwtPayload

export const createToken: ICreateToken = (payload, secret, expireTime) => {
  return jwt.sign(payload, secret, { expiresIn: expireTime })
}

export const verifyToken: IVerifyToken = (token, secret) => {
  return jwt.verify(token, secret) as JwtPayload
}

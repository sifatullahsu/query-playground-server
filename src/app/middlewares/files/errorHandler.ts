import { ErrorRequestHandler } from 'express'
import mongoose from 'mongoose'
import ApiError from '../../../error/ApiError'
import handleCastError from '../../../error/handleCastError'
import handleValidationError from '../../../error/handleValidationError'

type IErrorMessages = {
  path: string | number
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let status = 500
  let message = 'Something went wrong.'
  let errorMessages: IErrorMessages[] = []
  const stack = error.stack

  if (error instanceof mongoose.Error.CastError) {
    const simplified = handleCastError(error)
    status = simplified.status
    message = simplified.message
    errorMessages = simplified.errorMessages
  } else if (error instanceof mongoose.Error.ValidationError) {
    const simplified = handleValidationError(error)
    status = simplified.status
    message = simplified.message
    errorMessages = simplified.errorMessages
  } else if (error instanceof ApiError) {
    status = error.status
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : []
  } else if (error instanceof Error) {
    message = error.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message
          }
        ]
      : []
  }

  res.status(status).json({
    success: false,
    message,
    errorMessages,
    stack
  })
}

export default errorHandler

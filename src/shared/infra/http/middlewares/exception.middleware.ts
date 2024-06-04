import { INextFunction, IRequest, IResponse } from '..'
import { IExceptionHandler } from './exception-handler.interface'

const exceptionMiddleware = (error: IExceptionHandler, request: IRequest, response: IResponse, next: INextFunction) => {
  if (error) {
    return response.status(error.statusCode || 500).json({
      [typeof error.message == 'string' ? 'message' : 'messages']: error.message,
    })
  }
}

export default exceptionMiddleware
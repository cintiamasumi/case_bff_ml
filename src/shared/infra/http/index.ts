import { Request, Response, NextFunction, MediaType, Handler } from 'express'

type IRequest = Request
type IResponse = Response
type INextFunction = NextFunction
type IMediaType = MediaType
type IHandler = Handler
type IMiddleware = (request: IRequest, response: IResponse, next: INextFunction) => void

interface IError {
  message: string
  statusCode: number
}

interface IHttpConfig {
  port: number
}

export {
  IRequest,
  IResponse,
  INextFunction,
  IMediaType,
  IHttpConfig,
  IMiddleware,
  IError,
  IHandler
}
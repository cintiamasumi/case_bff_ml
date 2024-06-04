import { IExceptionHandler } from "../infra/http/middlewares/exception-handler.interface";


export default class ExceptionHandler implements IExceptionHandler {  
  constructor(
    public message: string | string[],
    public statusCode: number ,    
  ) {}
}
import * as dotenv from 'dotenv'; dotenv.config()
import { App } from './config'

new App()
  .setupHttpServer()
  .startHttpServer()
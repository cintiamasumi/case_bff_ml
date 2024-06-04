import { httpServer } from './../server'
import { modules } from './config'

export class App {
  setupHttpServer() {
    if (modules?.http) {
      httpServer.setup()
    }

    return this
  }

  startHttpServer() {
    if (modules?.http) {
      httpServer.start()
    }

    return this
  }  
}
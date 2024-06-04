import { http } from './shared/infra/http/resources'
import router from './shared/infra/http/routes'
import { httpConfig } from './config/http'
import morgan from 'morgan'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ecsFormat = require('@elastic/ecs-morgan-format')
const server = http.server()

const setup = () => {
  server.use(morgan(ecsFormat()))
  server.use(http.server.json())
  server.use(router)
  return server
}

const start = () => {
  server.listen(httpConfig.port, () => {
    console.log(`SERVER LISTENING PORT ${httpConfig.port}`)
  })
}

export const httpServer = { setup, start }
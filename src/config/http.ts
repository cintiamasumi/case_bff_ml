import { IHttpConfig } from '../shared/infra/http'

const httpConfig: IHttpConfig = {
  port: Number(process.env.PORT || 3000)
}

export { httpConfig }
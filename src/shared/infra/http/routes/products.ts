import { MercadoLivreController } from '../../../../modules/controller/mercadolivre.controller'
import { http } from '../resources'
import { IRequest, IResponse } from '..'
import { use } from '../exception'

const productsRoutes = http.router()

productsRoutes.get('/items', use( async (req: IRequest, res: IResponse) => {
  
  const controller = new MercadoLivreController()
  const responseController = await controller.getParams(req, res)
  return responseController
}))

productsRoutes.get('/items/:id', use( async (req: IRequest, res: IResponse) => {
  
  const controller = new MercadoLivreController()
  const responseController = await controller.getProduct(req, res)
  return responseController
}))
http.resource({
  router: productsRoutes,
  controller: MercadoLivreController,
  middlewares: []
})

export default productsRoutes
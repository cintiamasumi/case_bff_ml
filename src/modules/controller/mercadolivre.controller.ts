import { IRequest, IResponse } from '../../shared/infra/http'
import { Items } from '../useCase/items'
import { Search } from '../useCase/search'

export class MercadoLivreController {
  async getProduct(request: IRequest, response: IResponse) {
    const useCase = new Items()
    const { id } = request.params
    const useCaseResponse = await useCase.item( id )
    return response.status(200).json(useCaseResponse)
  }

  async getParams(request: IRequest, response: IResponse){
    const useCase = new Search()
    const useCaseResponse = await useCase.productsByParams(request.query)
    return response.status(201).json(useCaseResponse)
  }
}
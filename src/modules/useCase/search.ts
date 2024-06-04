import { CustomerMercadoLivreProvider } from "../../shared/infra/providers/mercadolivre.api"
import {  item, searchItems } from "../dto/bff/params.bff.search"
import { ProductsMapper } from "../mapper/products"

export class Search {

  private provider = new CustomerMercadoLivreProvider()
  private mapper = new ProductsMapper()

  async productsByParams(query:any):Promise<searchItems>{
    const limitQuery = Number(process.env.LIMIT_QUERY || 4)
    const response = await this.provider.search(query,limitQuery)
    const products = this.mapper.get(response)
    const formated = this.formartedCurrencyData(products)
    return formated
  }

  private async formartedCurrencyData(payload:searchItems){
    const arr:item[] = []
    await Promise.all( payload.items.map(async(item) => {
      const id = item.price.currency
      const currencyData = await this.provider.currenciesItem(id)
      item.price.currency = currencyData.symbol
      item.price.decimals = currencyData.decimal_places
      arr.push(item)
    }))
    return payload
  }
}
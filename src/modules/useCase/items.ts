import { CustomerMercadoLivreProvider } from "../../shared/infra/providers/mercadolivre.api"
import { itemsDescription } from "../dto/bff/params.bff.items"
import { currencies } from "../dto/mercadolivre/mercadolivre.search.api"
import { ItemsDescriptionMapper } from "../mapper/items.description"

export class Items {

  private provider = new CustomerMercadoLivreProvider()
  private mapper = new ItemsDescriptionMapper()

  async item(id:string){
    const description = await this.itemDescription(id)
    const response = await this.provider.itemById(id)
    const { category_id } = response
    const category = await this.categories(category_id)
    const mapper = this.mapper.itemsId(response, description, category)
    const formatted = this.formartedCurrencyData(mapper)
    
    return formatted
  }

  private async itemDescription(id:string){

    const response = await this.provider.itemDescription(id)
    return response.plain_text
  }

  private async currencyById(id: any): Promise<currencies> {

    const response = await this.provider.currenciesItem(id)
    return response
  }

  private async formartedCurrencyData(payload:itemsDescription){

    const currencyData = await this.currencyById(payload.item.price.currency)
    payload.item.price.decimals = currencyData.decimal_places
    payload.item.price.currency = currencyData.symbol
    return payload
  }

  private async categories(id:string){
    const dataCategories = await this.provider.categoriesItem(id)
    const category = this.mapper.categories(dataCategories)
    return category
  }
}
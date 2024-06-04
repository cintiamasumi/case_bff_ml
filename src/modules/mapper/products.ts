import { filters, result, search } from "../dto/mercadolivre/mercadolivre.search.api";
import { item, searchItems } from "../dto/bff/params.bff.search";



export class ProductsMapper{
  public get (payload: search): searchItems{
    const items = this.itens(payload.results)
    const categories = this.categories(payload.filters)

    const result = {
      author:{
        lastname:'',
        name:''
      },
      categories,
      items
    }
    return result;
  }

  private itens(payload:Partial<result[]>):item[]{
    const result : item[] = []
    
    payload.map(item => {
      result.push(
      {
        id:item?.id,
        condition: item?.condition,
        free_shipping: item?.shipping.free_shipping,
        picture:item?.thumbnail,
        price:{
          amount: item?.price,
          currency:item?.currency_id,
          decimals: 2
        },
        title:item?.title
        
      }
    )
    })
    return result 
  }
  
  public categories(payload: filters[]): string[] | []{
    const categories = payload.find(result => result.id === 'category')
    return categories?.values[0].path_from_root.map(cat => cat.name) ||  [];
  }
}
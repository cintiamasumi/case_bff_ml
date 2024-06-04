import { itemsDescription } from "../dto/bff/params.bff.items";
import { category } from "../dto/mercadolivre/mercadolivre.categories.api";
import { itemById } from "../dto/mercadolivre/mercadolivre.items.api";

export class ItemsDescriptionMapper  {

  itemsId(payload:itemById, descri:string , category:string[]):itemsDescription{
    
    const formart:itemsDescription[] = []

    formart.push({
      author:{
        lastname:'',
        name:''
      },
      item:{
        id:payload.id,
        title:payload.title,
        price:{
          amount:payload.price,
          currency:payload.currency_id,
          decimals:1
        },
        condition:payload.condition,
        description:descri,
        free_shipping:payload.shipping.free_shipping,
        picture:payload.pictures[0].url,
        sold_quantity:payload.sold_quantity,
      },
      categories:category
    })

    const formated = Object.assign({}, ...formart);
    return formated
  }

  public categories(payload: category): string[] | []{

    const categories = payload.path_from_root.map(cat => cat.name) 
    return categories

  }
  
}
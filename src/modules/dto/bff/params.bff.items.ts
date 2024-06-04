export type itemsDescription = {
  author:{
    name:string
    lastname:string
  },
  item:item
  categories?:string[]
}

export type item = {
  id:string
  title:string
  price: price
  picture:string
  condition:string
  free_shipping:boolean
  sold_quantity:number
  description:string,
  
}
export type price = {
  currency:string
  amount:number
  decimals:number
}

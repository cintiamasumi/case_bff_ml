export type itemById = {
  id:string
  title:string
  price:number
  currency_id:string
  thumbnail:string
  condition:string
  shipping:{
    free_shipping:boolean
  }
  sold_quantity:number,
  pictures:pictures[]
}

export type descriptionItem = {
  plain_text:string
}

export type pictures = {
  url:string
  id:string
}
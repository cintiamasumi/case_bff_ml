export type searchItems = {
  author:{
    name:string
    lastname:string
  },
  categories:string[]
  items:item[]
}

export type item = {
  id:string | undefined
  title:string | undefined
  price: infoPrice 
  picture:string | undefined
  condition:string | undefined
  free_shipping:boolean | undefined
}

export type infoPrice  ={
  currency:string | undefined
  amount:number | undefined
  decimals:number 
}


export type result = {
  id:string
  title:string
  category_id:string 
  thumbnail:string
  currency_id:string
  price:number
  condition:string
  shipping:{
    logistic_type:string
    mode:string
    store_pick_up?:boolean
    free_shipping?:boolean 
    tags:string[]
  }
  seller_address: seller_address
}

export type search = {
  site_id: string
  country_default_time_zone: string
  query: string
  paging: paging
  results: result[]
  sort: sort
  available_sorts: available_sorts[]
  filters: filters[]
  available_filters: available_filters[]
}

type paging = {
  total: number
  primary_results: number
  offset: number
  limit: number
}

type sort = {
  id: string
  name: string
}

type available_sorts = {
  id: string
  name: string
}

export type filters = {
  id: string
  name: string
  type: string
  values: categoriesValues[] | [];
}

type available_filters = {
  id: string
  name: string
  type: string
  values: [];
}

type categoriesValues = { 
  id:string
  name:string
  path_from_root: categories[]
}

type categories = {
  id:string
  name:string
}

export type currencies = {
  id: string
  symbol: string
  description: string
  decimal_places: number
}


type seller_address = {
  city: {
    id: string
    name: string
  }
}
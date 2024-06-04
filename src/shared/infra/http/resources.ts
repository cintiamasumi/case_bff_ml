import express, { Router } from 'express'
import { IMiddleware, IRequest } from '.'
import { use } from './exception'

interface IRouteResource {
  controller: any
  router: Router
  middlewares?: IMiddleware[]
}

interface IHandleMiddleware {
  router: Router
  middlewares: IMiddleware[]
}

const router = Router
const server = express

/**
 * Add middlewares for route
 */
const handleMiddlewares = ({router, middlewares}: IHandleMiddleware) => {
  middlewares.forEach(middleware => {
    router.use(use(middleware))
  })
}

/**
 * Get id param from request
 */
const getIdParam = (req: IRequest) => {
  const { id } = req.params
  return id
}

/**
 * Implements the CRUD resources for route
 */
const resource = ({ controller, router, middlewares }: IRouteResource) => {
  if (middlewares) {
    
    handleMiddlewares({ router, middlewares })
  }

  router.get('/', use((req, res) => {
    return new controller().get(req, res)
  }))

  router.post('/', use((req, res) => {
    return new controller().create(req, res)
  }))

  router.get('/:id', use((req, res) => {
    return new controller().show(getIdParam(req), req, res)
  }))

  router.put('/:id', use((req, res) => {
    return new controller().update(getIdParam(req), req, res)
  }))

  router.delete('/:id', use((req, res) => {
    return new controller().destroy(getIdParam(req), req, res)
  }))
}

const http = {
  router,
  server,
  resource,
  handleMiddlewares,
  getIdParam
}

export { http }
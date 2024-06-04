import exceptionMiddleware from '../middlewares/exception.middleware'
import { http } from '../resources'
import productsRoutes from './products'
import { IRequest, IResponse } from '..'

const router = http.router()

router.get('/health', (req: IRequest, res: IResponse) => {
  return res.status(200).json({ message: 'health' })
})
/** 
 * Add general middlewares
 */
http.handleMiddlewares({
  router,
  middlewares: []
})

/**
 * Routes
 */
router.use('/api', productsRoutes)

/**
 * Exception Middleware
 */
router.use(exceptionMiddleware)

export default router
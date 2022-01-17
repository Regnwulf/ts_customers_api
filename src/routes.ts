import { Router, Request, Response } from 'express'
import { getCustomers, saveCustomer, getCustomer, updateCustomer, removeCustomer } from './controller/CustomersController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World' })
})

routes.get('/customer', getCustomers)
routes.get('/customer/:id', getCustomer)
routes.post('/customer', saveCustomer)
routes.put('/customer/:id', updateCustomer)
// routes.patch('/customer/:id', finnishedCustomer)
routes.delete('/customer/:id', removeCustomer)

export default routes

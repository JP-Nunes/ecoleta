import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

import express from 'express'
import knex from './database/connection'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)

export default routes
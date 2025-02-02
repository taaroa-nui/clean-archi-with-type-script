import { Application } from 'express'
import eventRouter from './eventRouter'

export default function routesIndex(app: Application) {
  app.use('/api/events', eventRouter())
}

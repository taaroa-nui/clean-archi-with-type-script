import express from 'express'
import eventController from '~/adapters/controllers/eventController'

export default function eventRouter() {
  const router = express.Router()

  // Load the event controller. For now without any dependencies.
  const controllers = eventController()

  router.route('/').get(controllers.getAllEvents)

  return router
}

import { RequestHandler, Request, Response } from 'express'
import { EventBody, EventQuery } from '~/types/event.type'

export default function eventController() {
  const getAllEvents: RequestHandler<{}, EventBody, EventQuery> =
    function getAllEvents(req: Request, res: Response) {
      res.status(200).json({ message: 'Hello, all events' })
    }

  return {
    getAllEvents,
  }
}

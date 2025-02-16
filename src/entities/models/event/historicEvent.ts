import { BaseContext } from './baseContext'

export type EventType = 'birth' | 'battle'

export type HistoricEvent<EventContext extends BaseContext> = {
  type: EventType
  startDate: Date
  endDate: Date
  label: string
  eventContext: EventContext
}

export type EventBody = {
  date: Date
  name: string
}

export type EventQuery = {
  limit: number
}

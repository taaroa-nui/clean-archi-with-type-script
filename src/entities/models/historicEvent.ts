export type EventType = 'birth' | 'death' | 'battle'

export type EventCategory = {
  name: string
  subCategory?: EventCategory
}

export type HistoricEvent<HistoricEventMetadata> = {
  startDate: Date
  endDate: Date
  label: string
  type: EventType
  category: EventCategory
  heMetadata: HistoricEventMetadata
}

export type EventBody = {
  date: Date
  name: string
}

export type EventQuery = {
  limit: number
}

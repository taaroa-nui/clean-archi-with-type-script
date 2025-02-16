export interface BaseContext {
  category: EventCategory
}

interface EventCategory {
  name: string
  subCategory?: EventCategory
}

export class HistoricEventHandler implements HistoricEvent {
  getDescription(event: HistoricEvent): string {
    return `Event: ${event.category.name}`
  }
}

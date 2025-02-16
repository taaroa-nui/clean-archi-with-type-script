import { HistoricEvent, Birth } from '~/entities/models/'

describe('historicEventDescription', () => {
  it('should return a valid description for a historic event', () => {
    const quizz = new EventDescriptor()

    const testEvent: HistoricEvent<Birth> = {
      startDate: new Date(),
      endDate: new Date(),
      label: 'test',
      eventContext: {
        place: 'test',
        mother: 'test',
        father: 'test',
        child: 'test',
        category: { name: 'birth' },
      },
    }
    eventDescriptor
      .getDescription(testEvent)
      .toBe('test was born in test to test and test')
  })
})

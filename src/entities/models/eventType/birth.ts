import { BaseContext } from '../event/baseContext'

export interface Birth extends BaseContext {
  place: string
  mother: string
  father: string
  child: string
  category: { name: 'birth' }
}

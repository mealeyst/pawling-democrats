import { Entry } from 'contentful'

import { usePromised, UsePromisedState } from './usePromised'
import { getEntries } from '../../lib/Contentful'

export const useEntries = (query?: any): UsePromisedState<Entry<unknown>[]> =>
  usePromised((): Promise<Entry<unknown>[]> => getEntries(query))

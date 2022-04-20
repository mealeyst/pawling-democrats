import { Entry } from 'contentful';

import { usePromised, UsePromisedState } from './usePromised';
import { getEntries } from '../services/Contentful';

export const useEntries = (query?: any): UsePromisedState<Entry<unknown>[]> => {
  return usePromised((): Promise<Entry<unknown>[]> => getEntries(query));
}
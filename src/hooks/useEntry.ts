import { Entry } from 'contentful';

import { usePromised, UsePromisedState } from './usePromised';
import { getEntry } from '../services/Contentful';

export const useEntry = (id: string, query?: any): UsePromisedState<Entry<unknown>> => {
  return usePromised((): Promise<Entry<unknown>> => getEntry(id, query));
}
import { Entry } from 'contentful';

import { usePromised, UsePromisedState } from './usePromised';
import { getEntry } from '../../lib/Contentful';

export const useEntry = (id: string, query?: any): UsePromisedState<Entry<unknown>> =>
  usePromised((): Promise<Entry<unknown>> =>
    getEntry(id, query));

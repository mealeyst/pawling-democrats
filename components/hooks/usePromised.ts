import { useCallback, useEffect, useState } from 'react';
import { useIsMounted } from './useIsMounted';

export type UsePromisedState<T> = {
    data: T | null;
    error: unknown;
    isLoading: boolean;
    load: () => void;
};

export const usePromised = <DataType>(
  asyncFn: () => Promise<DataType>,
  runOnInit = true,
): UsePromisedState<DataType> => {
  const _isMounted = useIsMounted();

  const [error, setError] = useState(null as unknown);
  const [isLoading, setIsLoading] = useState(runOnInit);
  const [data, setData] = useState(null as DataType | null);

  const load = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await asyncFn();

      if (_isMounted) {
        setIsLoading(false);
        setData(result);
      }
    } catch (err) {
      if (_isMounted) {
        setIsLoading(false);
        setError(err);
      }
    }
  }, [asyncFn]);

  useEffect(() => {
    if (runOnInit) {
      load();
    }

    return () => {
      if (_isMounted) setIsLoading(false);
    };
  }, [runOnInit]);
  return {
    data, error, isLoading, load,
  };
};

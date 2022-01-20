import { fetcher, isSWRLoading } from '@lib/swr';
import useSWR, { SWRConfiguration } from 'swr';

export type QueryStatus = 'loading' | 'error' | 'success';

export interface UseQueryLoadingResult<TData, TError> {
  status: 'loading';
  data: undefined;
  error: undefined;
}

export interface UseQuerySuccessResult<TData, TError> {
  data: TData;
  error: null;
  status: 'success';
}

export interface UseQueryErrorResult<TData, TError> {
  error: TError;
  data: null;
  status: 'error';
}

export type UseQueryResult<TData, TError extends IQueryError = IQueryError> =
  | UseQueryLoadingResult<TData, TError>
  | UseQueryErrorResult<TData, TError>
  | UseQuerySuccessResult<TData, TError>;

export interface IQueryError {
  message: string;
}

const defaultSWRConfig: SWRConfiguration = {};

export function useQuery<TData, TError extends IQueryError = IQueryError>(
  query: string | readonly string[] | Falsy
): UseQueryResult<TData, TError> {
  const swr = useSWR<TData, TError>(query, fetcher, defaultSWRConfig);

  let state: UseQueryResult<TData, TError> = {
    status: 'loading',
    data: undefined,
    error: undefined
  };

  if (!isSWRLoading(swr)) {
    if (swr.error && 'message' in swr.error) {
      const errorRes: UseQueryErrorResult<TData, TError> = {
        data: null,
        error: swr.error,
        status: 'error'
      };

      state = errorRes;
    } else if (swr.data) {
      const successRes: UseQuerySuccessResult<TData, TError> = {
        error: null,
        data: swr.data,
        status: 'success'
      };
      state = successRes;
    }
  }

  return state;
}

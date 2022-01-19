import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

import { fetcher } from './fetcher';

export type QueryStatus = 'loading' | 'error' | 'success';

interface BaseQueryResult<TData, TError> {
  mutate: SWRResponse<TData, TError>['mutate'];
}

export interface UseQueryLoadingResult<TData, TError> extends BaseQueryResult<TData, TError> {
  data: undefined;
  error: undefined;
  isLoading: true;
  status: 'loading';
}

export interface UseQuerySuccessResult<TData, TError> extends BaseQueryResult<TData, TError> {
  data: TData;
  error: null;
  isLoading: false;
  status: 'success';
}

export interface UseQueryErrorResult<TData, TError> extends BaseQueryResult<TData, TError> {
  data: null;
  error: TError;
  isLoading: false;
  status: 'error';
}

export type UseQueryResult<TData, TError> =
  | UseQueryLoadingResult<TData, TError>
  | UseQueryErrorResult<TData, TError>
  | UseQuerySuccessResult<TData, TError>;

export interface IQueryError {
  message: string;
}

const defaultSWRConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false
};

const isSWRLoading = ({ data, error }: SWRResponse) =>
  typeof data === 'undefined' && typeof error === 'undefined';

export function useQuery<TData, TError extends IQueryError = IQueryError>(
  query: string | Falsy
): UseQueryResult<TData, TError> {
  const swr = useSWR<TData, TError>(query, fetcher, defaultSWRConfig);

  const { data, error, mutate } = swr;

  let state: Pick<
    UseQueryResult<TData, TError>,
    'data' | 'error' | 'mutate' | 'isLoading' | 'status'
  > = {
    data: undefined,
    error: undefined,
    mutate,
    isLoading: true,
    status: 'loading'
  };

  if (!isSWRLoading(swr)) {
    if (error) {
      state = { data: null, error, mutate, isLoading: false, status: 'error' };
    } else if (data) {
      state = { data, error: null, mutate, isLoading: false, status: 'success' };
    }
  }

  return { ...swr, ...state } as UseQueryResult<TData, TError>;
}

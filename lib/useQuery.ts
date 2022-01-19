import useSWR, { SWRResponse } from 'swr';

export type QueryStatus = 'loading' | 'error' | 'success';

interface BaseQueryResult<TData, TError> extends SWRResponse<TData | null, TError | null> {
  isLoading: boolean;
  status: QueryStatus;
}

export interface UseQueryLoadingResult<TData, TError> extends BaseQueryResult<TData, TError> {
  data: undefined;
  error: null;
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

export function useQuery<TData, TError extends IQueryError = IQueryError>(
  query: string
): UseQueryResult<TData, TError> {
  const swr = useSWR<TData | null, TError | null>(query);
  const { data, error } = swr;

  const isLoading = typeof data === 'undefined' && typeof error === 'undefined';

  let status: QueryStatus = 'success';

  if (typeof error !== 'undefined') {
    status = 'error';
  }

  if (typeof data === 'undefined') {
    status = 'loading';
  }

  return { isLoading, status, ...swr } as UseQueryResult<TData, TError>;
}

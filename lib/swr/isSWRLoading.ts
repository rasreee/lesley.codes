import { SWRResponse } from 'swr';

export const isSWRLoading = ({
  data,
  error
}: Pick<SWRResponse, 'data' | 'error'> & Partial<Omit<SWRResponse, 'data' | 'error'>>) =>
  typeof data === 'undefined' && typeof error === 'undefined';

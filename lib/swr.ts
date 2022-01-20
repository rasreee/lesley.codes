import { SWRResponse } from 'swr';

export const isSWRLoading = ({ data, error }: SWRResponse) =>
  typeof data === 'undefined' && typeof error === 'undefined';

import { useRouter } from 'next/router'

export type RouterQuery = ReturnType<typeof useRouter>['query']

export const normalizeQueryParam = (param: string | string[] | undefined): string => {
  if (typeof param === 'string') return param
  if (typeof param === 'undefined') return 'undefined'

  return param.join(' ')
}

export const parseQueryParamAsArray = <T extends string>(target: string, routerQuery: RouterQuery): T[] => {
  return target in routerQuery
    ? normalizeQueryParam(routerQuery.type)
        .split(',')
        .map((value) => value as T)
    : []
}

export const sluggify = <S extends string>(s: S): Path<S> => `/${s}` as const;

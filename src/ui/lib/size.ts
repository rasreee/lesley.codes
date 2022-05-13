export const rem = (px: number): string => {
  return `${px / 16}rem`
}

export const sizeUnitToRem = (n: number): string => rem(n * 4)

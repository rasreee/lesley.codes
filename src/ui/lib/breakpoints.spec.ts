import { above, below, only } from './breakpoints'

/**
 * @group unit
 * @group utils
 */
describe('Breakpoints helper functions', () => {
  describe('above', () => {
    it("should get breakpoint larger than mobile given 'mobile'", () => {
      const breakpointName = 'mobile'
      const result = above(breakpointName)
      const expected = `@media screen and (min-width: ${rem(480)})`

      expect(result).toEqual(expected)
    })
  })
  describe('below', () => {
    it('should get the identifier SMALLER than given a breakpoint alias', () => {
      const breakpointName = 'tablet'
      const result = below(breakpointName)
      const expected = `@media screen and (max-width: ${rem(768)})`

      expect(result).toEqual(expected)
    })
  })
  describe('only', () => {
    it("should get the mobile breakpoint given 'mobile'", () => {
      const breakpointName = 'mobile'
      const result = only(breakpointName)
      const expected = `@media screen and (min-width: ${rem(
        0,
      )}) and (max-width: ${rem(480)})`

      expect(result).toEqual(expected)
    })

    it("should get the desktop breakpoint given 'desktop'", () => {
      const breakpointName = 'desktop'
      const result = only(breakpointName)
      const expected = `@media screen and (min-width: ${rem(
        768,
      )}) and (max-width: ${rem(992)})`

      expect(result).toEqual(expected)
    })
  })
})

const rem = (px: number): string => {
  return `${px / 16}rem`
}

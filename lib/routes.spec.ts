import { getRouteTitle } from './routes';

/**
 * @group unit
 * @group lib
 */
describe('@lib/routes', () => {
  describe('getRouteTitle()', () => {
    it("should get route title 'Home' given '/'", () => {
      const pathname = '/';
      const result = getRouteTitle(pathname);
      expect(result).toEqual('Home');
    });
    it('should get route title given pathname with dynamic slug', () => {
      const pathname = '/blog/aasdf';
      const result = getRouteTitle(pathname);
      expect(result).toEqual('Blog');
    });
  });
});

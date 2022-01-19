import { getRouteTitle, Routes } from './routes';

/**
 * @group unit
 * @group lib
 */
describe('@lib/routes', () => {
  describe('Routes', () => {
    it('should have at least 3 route objects', () => {
      expect(Routes.map((route) => route.path)).toHaveLength(3);
    });
  });

  describe('getRouteTitle()', () => {
    it("should get route title 'Home' given '/'", () => {
      const pathname = '/';
      const result = getRouteTitle(pathname);
      expect(result).toEqual('Home');
    });
    it('should get route title given non-index route', () => {
      const pathname = '/playground';
      const result = getRouteTitle(pathname);
      expect(result).toEqual('Playground');
    });
    it('should get route title given pathname with dynamic slug', () => {
      const pathname = '/blog/aasdf';
      const result = getRouteTitle(pathname);
      expect(result).toEqual('Blog');
    });
  });
});

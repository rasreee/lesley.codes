import { getRouteTitle } from './routes';

/**
 * @group unit
 * @group lib
 */
describe('@lib/routes', () => {
  describe('getRouteTitle()', () => {
    it('should get route title given full pathname', () => {
      const pathname = '/';
      const result = getRouteTitle(pathname);
      expect(result).toEqual('Home');
    });
  });
});

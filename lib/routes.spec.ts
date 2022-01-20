import { buildApiUrl, buildUrl } from './routes';

const slug = `fake-slug`;

/**
 * @group lib
 * @group routes
 */
describe('@lib/routes', () => {
  describe('buildUrl()', () => {
    it('should return posts route', () => {
      expect(buildUrl('posts')).toEqual('/posts');
    });
    it('should return post details route given a slug', () => {
      expect(buildUrl('post', slug)).toEqual(`/post/${slug}`);
    });
  });

  describe('buildApiUrl()', () => {
    it('should return contents API route given a slug', () => {
      expect(buildApiUrl('contents', slug)).toEqual(`/api/contents/${slug}`);
    });

    it('should return post details API route given a slug', () => {
      expect(buildApiUrl('post', slug)).toEqual(`/api/post/${slug}`);
    });
  });
});

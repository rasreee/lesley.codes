// XXX All expect.extend() utilities loaded here will be available for all tests, they also might need to be declared in jest.d.ts
// Import utilities that extend Jest "expect" function by themselves
// import './testing/toContainObject';

import { toMatchOneOf, toMatchShapeOf } from 'jest-to-match-shape-of'; // See https://www.npmjs.com/package/jest-to-match-shape-of

// Extend Jest "expect" function
expect.extend({
  toMatchOneOf,
  toMatchShapeOf
});

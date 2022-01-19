module.exports = {
  roots: ['.'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    // XXX we must specify a custom tsconfig for tests because we need the typescript transform
    //  to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    //  can see this setting in tsconfig.jest.json -> "jsx": "react"
    //  See https://github.com/vercel/next.js/issues/8663
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  /**
   * Map our module path aliases, so that Jest can understand modules loaded using "@modules" and load the proper file.
   * Required, or Jest will fail to import dependencies from tests.
   *
   * XXX The below list must match `tsconfig.json:compilerOptions.paths`, so the Next.js app and Jest resolve all aliases the same way.
   *
   * @see https://nextjs.org/docs/advanced-features/module-path-aliases
   * @see https://github.com/ilearnio/module-alias/issues/46#issuecomment-546154015
   */
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@db/(.*)$': '<rootDir>/db/$1',
    '^@models/(.*)$': '<rootDir>/models/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@ui/(.*)$': '<rootDir>/ui/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
  },
  modulePathIgnorePatterns: ['.next/'],
  runner: 'groups', // Allow to use jest-runner-groups - See https://github.com/eugene-manuilov/jest-runner-groups#update-jest-config
  setupFilesAfterEnv: [
    'jest-extended', // Extends native "expect" abilities - See https://github.com/jest-community/jest-extended
    'jest-expect-message', // Allows to add additional message when test fails - See https://github.com/mattphillips/jest-expect-message
    './jest.setup.js',
    './jest.extends.ts',
  ],
};

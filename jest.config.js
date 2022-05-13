const DIRS_TO_IGNORE = ['__fixtures__', 'node_modules', 'cypress', '.next']

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: DIRS_TO_IGNORE,
}

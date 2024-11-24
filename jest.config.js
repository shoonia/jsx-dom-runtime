/** @type {import('jest').Config} */
const config = {
  cache: false,
  rootDir: '.',
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/utils/jest-setup.ts'
  ],
  moduleNameMapper: {
    'jsx-dom-runtime/$1': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/src/',
  ],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
};

export { config as default };

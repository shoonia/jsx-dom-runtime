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
  modulePathIgnorePatterns: [
    '<rootDir>/src/',
  ],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
};

export { config as default };

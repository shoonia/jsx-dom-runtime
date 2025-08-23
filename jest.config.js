/** @type {import('jest').Config} */
const config = {
  cache: false,
  watchman: false,
  clearMocks: true,
  resetModules: true,
  restoreMocks: true,
  rootDir: 'tests',
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/utils/jest-setup.ts'
  ],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
};

export { config as default };

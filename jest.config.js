/** @type {import('jest').Config} */
const config = {
  cache: false,
  rootDir: 'tests',
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/utils/jest-setup.ts'
  ],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
  maxWorkers: process.env.CI ? 1 : '50%',
  workerIdleMemoryLimit: process.env.CI ? '512MB' : '2GB',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$))'
  ],
};

export { config as default };

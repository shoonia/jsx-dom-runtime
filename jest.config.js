const { CI } = process.env;

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
  maxWorkers: CI ? 1 : '50%',
  workerIdleMemoryLimit: CI ? '512MB' : '2GB',
  resetModules: true,
  clearMocks: true,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$))'
  ],
  resolver: undefined,
  forceExit: CI ? true : false,
};

export { config as default };

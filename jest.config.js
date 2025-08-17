/** @type {import('jest').Config} */
const config = {
  cache: false,
  resetModules: true,
  clearMocks: true,
  restoreMocks: true,
  rootDir: 'tests',
  workerIdleMemoryLimit: '512MB',
  forceExit: true,
  detectOpenHandles: true,
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/utils/jest-setup.ts'
  ],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
};

export { config as default };

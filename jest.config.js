const config = {
  rootDir: 'tests',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ],
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.tsx', '.ts'],
};

export { config as default };

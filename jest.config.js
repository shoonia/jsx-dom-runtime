module.exports = {
  rootDir: 'tests',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ],
  testEnvironment: 'jest-environment-jsdom',
};

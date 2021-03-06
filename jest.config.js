module.exports = {
  rootDir: 'tests',
  transform: {
    '\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ],
};

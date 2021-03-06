module.exports = {
  rootDir: 'tests',
  transform: {
    '\\.jsx$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.js'
  ],
};

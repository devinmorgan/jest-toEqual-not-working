// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js",
  errorOnDeprecated: true,
  moduleNameMapper: {
    ".worker.js":"<rootDir>/__mocks__/workerMock.js"
  },
  verbose: true,
};

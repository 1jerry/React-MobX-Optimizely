module.exports = {
  preset: "react-native",
  setupFiles: [
    "<rootDir>/src/setupTests.js",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testPathIgnorePatterns: ["/node_modules/", "/e2e"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-native|@react-navigation|@storybook|@react-native-community|@ui-kitten/components|@okta)",
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|ttf|woff|woff2)$": "identity-obj-proxy",
  },
}

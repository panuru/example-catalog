module.exports = {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,mjs}"
  ],
  "setupFiles": [
    "<rootDir>/config/polyfills.js",
    "<rootDir>/config/jest/setup.js"
  ],
  "testMatch": [
    "<rootDir>/**/__tests__/**/*.{js,jsx,mjs}"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.s?css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|scss|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node",
    "mjs"
  ]
};

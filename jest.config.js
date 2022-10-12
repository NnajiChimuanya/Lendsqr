module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

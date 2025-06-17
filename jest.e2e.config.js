module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/__tests__/e2e/**/*.test.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/jest-puppeteer.setup.js'],
  testTimeout: 30000,
}
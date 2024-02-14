/* eslint-disable no-undef */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  defaultCommandTimeout: 10000,
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  retries: 1,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
  },
});

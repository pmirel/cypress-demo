const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  projectId: oke4vo,
  defaultCommandTimeout: 10000,
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  retries: 1,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

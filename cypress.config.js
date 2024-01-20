const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  retries: 2,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

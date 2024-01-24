const { defineConfig } = require('cypress');
import getProjectId from 'cypress/support/utilities/environments.js';

module.exports = defineConfig({
  // projectId: process.env.CYPRESS_PROJECT_ID || secrets.CYPRESS_PROJECT_ID || 'default_project_id',
  projectId: getProjectId(),
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

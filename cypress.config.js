const { defineConfig } = require('cypress');

module.exports = defineConfig({
  getProjectId: () => {
    if (process.env.CYPRESS_PROJECT_ID) {
      // Running locally, use the local environment variable
      return process.env.CYPRESS_PROJECT_ID;
    } else if (Cypress.env('CI')) {
      // Running in CI, use the secrets from GitHub Actions
      return Cypress.env('CYPRESS_PROJECT_ID');
    } else {
      // Default project ID if none of the above conditions are met
      return 'default_project_id';
    }
  },
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

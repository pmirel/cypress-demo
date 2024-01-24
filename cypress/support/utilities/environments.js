// getProjectId.js
require('dotenv').config();

const getProjectId = () => {
  if (process.env.CYPRESS_PROJECT_ID) {
    // Running locally, use the local environment variable
    return process.env.CYPRESS_PROJECT_ID;
  } else if (Cypress.env('CI') && Cypress.env('CYPRESS_PROJECT_ID')) {
    // Running in CI, use the secrets from GitHub Actions
    return Cypress.env('CYPRESS_PROJECT_ID');
  } else {
    // Default project ID if none of the above conditions are met
    return 'default_project_id';
  }
};

export default getProjectId;

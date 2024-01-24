// getProjectId.js
import { getProjectId } from 'cypress';
require('dotenv').config();

export default getProjectId = () => {
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
};

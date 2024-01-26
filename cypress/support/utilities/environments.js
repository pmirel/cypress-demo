const getProjectId = () => {
  if (process.env.CYPRESS_PROJECT_ID) {
    // Running locally, use the local environment variable
    return process.env.CYPRESS_PROJECT_ID;
  } else if (process.env.CI && process.env.CYPRESS_PROJECT_ID) {
    // Running in CI, use the secrets from GitHub Actions
    return process.env.CYPRESS_PROJECT_ID;
  } else {
    // Default project ID if none of the above conditions are met
    return 'default_project_id';
  }
};

module.exports = {
  getProjectId,
};

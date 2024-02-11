# Cypress Demo

Read about how the project was created at [miravalo.com](https://www.miravalo.com/). You can follow the article to create your own project or follow the instruction bellow to use the cypress-demo template.

This is a demonstration project showcasing the usage of Cypress automation test framework. The project employs ESLint for code quality, with _eslint_ plugins for cypress, and _Prettier_ for code formatting.\
The design pattern followed is the Page Object Model. Additionally, the dotenv package is utilized for securely storing sensitive information such as project Id and record key required for connecting to the Cypress cloud.

## Prerequisites

Before getting started, ensure you have the following dependencies installed:

- Git
- Node.js and npm
- Visual Studio Code (or any preferred code editor)

## Installation

To set up the project, follow these steps:

1. Clone the project repository.
2. Open a terminal or command prompt in the project folder.
3. Run `npm install` to install project dependencies.
4. Create an account on Cypress Cloud at [Cypress Cloud](https://cloud.cypress.io/signup) and create a new project.
5. Rename the file `.env-example` to `.env` and add your project ID and record key obtained from Cypress Cloud.

## Running the Tests

To execute the tests, navigate to the project's root folder in your terminal and use the following commands:

- `npm run cy:test`: Runs the tests in headless mode.
- `npm run cy:open`: Opens the Cypress App for running tests visually.
- `npm run cy:cloud`: Runs the tests in headless mode and stores the results in Cypress Cloud.

Additionally, automation tests are triggered automatically with GitHub Actions when new code is merged into the main branch. The results of these tests are also stored in Cypress Cloud for further analysis.

Feel free to explore the project!

&copy;Mirel Palii

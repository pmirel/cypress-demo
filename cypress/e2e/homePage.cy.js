import { HomePage } from '../pageObjects/homePage';

const homePage = new HomePage();
describe('visit home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('home page url is correct', () => {
    cy.url().should('equal', 'https://ecommerce-playground.lambdatest.io/');
  });

  it('page title', () => {
    cy.title().should('equal', 'Your Store');
  });

  it('main elements on the page are visible', () => {
    cy.get(homePage.mainNavigation).should('be.visible');
    cy.get(homePage.carousel).should('be.visible');
    cy.get(homePage.topProducts).scrollIntoView().should('be.visible');
  });

  it('search from home page', () => {
    homePage.searchForProduct('iPhone');
    cy.url().should('contain', 'search=iPhone');
  });

  it('navigate to category mp3 players by side menu', () => {
    cy.wait(700);
    cy.get(homePage.sideMenuIcon).should('be.visible').click({ force: true });
    cy.get(homePage.sideMenu).should('be.visible');
    cy.contains('MP3 Players').click();

    cy.title().should('equal', 'MP3 Players');
  });

  it('navigate to smartwatch from mega menu', () => {
    cy.contains(homePage.classTitle, 'Mega Menu').trigger('mouseover');
    cy.contains(homePage.smartWatchMenuElement, 'Smart Watch').click();
    cy.title().should('equal', 'Phones & PDAs');
  });
});

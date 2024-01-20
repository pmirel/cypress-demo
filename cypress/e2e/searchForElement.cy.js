import { HomePage } from '../pageObjects/homePage';
import { SearchPage } from '../pageObjects/SearchPage';

const homePage = new HomePage();
const searchPage = new SearchPage();

describe('Search for MacBook', () => {
  before(() => {
    cy.visit('/');
  });
  it('search for element from homepage', () => {
    homePage.searchForProduct('MacBook');
    cy.get(searchPage.productsList).first().should('contain', 'MacBook');
  });

  it('set seatch filters', () => {});

  it('open modal with product info', () => {});
});

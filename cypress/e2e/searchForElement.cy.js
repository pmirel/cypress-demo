import { HomePage } from '../pageObjects/HomePage.js';
import { SearchPage } from '../pageObjects/SearchPage.js';

const homePage = new HomePage();
const searchPage = new SearchPage();

describe('Search for MacBook', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('search for element from homepage', () => {
    homePage.searchForProduct('MacBook');
    cy.get(searchPage.productsList).first().should('contain', 'MacBook');
  });

  it('set search filters', () => {
    cy.get(homePage.searchButton).click();
    cy.get(searchPage.minValue).eq(1).as('minValue').clear();
    cy.get('@minValue').type(200, { delay: 200 });
    cy.get(searchPage.maxValue).eq(1).as('maxValue').clear();
    cy.get('@maxValue').type(1700, { delay: 200 });
    cy.get(searchPage.inputFilterSearch).eq(1).should('be.visible').type('mac');
    cy.get(searchPage.inStockCheckbox).check({ force: true });
  });

  it('open modal with product info', () => {
    cy.get(searchPage.topProductsSection).scrollIntoView();
    cy.get(searchPage.iMacProduct).as('iMacProduct').should('be.visible');

    cy.get('@iMacProduct')
      .parent()
      .next()
      .within(() => {
        cy.get(searchPage.eyeButton).click({ force: true });
      });

    cy.get(searchPage.productQuickView).should('be.visible');
    cy.get(searchPage.productQuickView)
      .find(searchPage.productNameQuickView)
      .should('contain', 'iMac');
  });
});

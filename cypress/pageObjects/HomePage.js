export class HomePage {
  title = '[title="Poco Electro"]';
  searchBar = '#search';
  logo = '[data-id="217821"]';
  mainNavigation = '#main-navigation';
  carousel = '[data-id="213240"]';
  topProducts = '[id="entry_213257"]';
  searchInput = 'input[name="search"]';
  submitButton = 'button[type="submit"]';
  sideMenuIcon = '#entry_217832 > .icon-left';
  sideMenu = '#entry_217840';
  classTitle = '.title';
  shopNowItem = '[data-id="213244"]';
  smartWatchMenuElement = '[title="Smart Watch"]';

  searchForProduct(product) {
    cy.get(this.searchBar).find(this.searchInput).type(product);
    cy.get(this.searchBar).find(this.submitButton).click();
  }
}

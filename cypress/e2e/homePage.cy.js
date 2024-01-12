describe('visit home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('home page url is correct', () => {
    cy.url().should('contain', 'ecommerce-playground');
  });
});

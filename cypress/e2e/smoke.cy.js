describe('Public pages load', () => {
  it('Home → About anchor works', () => {
    cy.visit('/');
    cy.findByText(/about/i).click();
    cy.url().should('include', '#about');
    cy.findByRole('heading', { name: /our story/i }).should('be.visible');
  });
});

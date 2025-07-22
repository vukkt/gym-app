import '@testing-library/cypress/add-commands';

// ----- Custom commands -----
Cypress.Commands.add('loginAsCoach', () => {
  // Hit the NextAuth credentialless callback you already added
  cy.request('/api/dev-login?role=COACH')
    .its('body')
    .then(({ token }) => {
      // Programmatically set cookie so we skip UI login
      cy.setCookie('next-auth.session-token', token);
    });
});

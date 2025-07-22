// cypress/support/commands.js
Cypress.Commands.add('devLogin', (user = {}) => {
  const defaults = {
    id: 'test-user-id',
    email: 'test@gym.xyz',
    role: 'COACH', // change per test
  };
  // The route sets the cookie itself; Cypress doesn’t need to.
  cy.request('POST', '/api/dev/login', { ...defaults, ...user });
});

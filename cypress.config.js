import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // picked up by all tests
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/index.js',
    video: false, // keep CI fast; enable locally if you like
    chromeWebSecurity: false, // lets us hit third‑party iframes (Calendly)
  },
});

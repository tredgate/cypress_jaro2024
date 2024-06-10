describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
  });

  it.only("Basic Intercept Test", () => {
    cy.intercept("http://localhost:3000/auth/login");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
  });
});

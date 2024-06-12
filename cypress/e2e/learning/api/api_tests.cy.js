describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
  });

  it("Basic Intercept Test", () => {
    cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api");
  });

  it("Login Api have POST request method", () => {
    cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api").its("request.method").should("eq", "POST");
  });

  it("Login API response have status 201", () => {
    cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api").its("response.statusCode").should("eq", 201);
  });

  it("Login API response have access_token in body", () => {
    cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api").its("response.body.access_token").should("exist");
  });

  it("Mock get Account API", () => {
    cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.intercept("/accounts/user/**", {
      fixture: "mock_accounts.json",
    }).as("accounts_api");

    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api");
    cy.get('[data-testid="accounts_section_link"]').click();
  });
});

describe("Environments tests", () => {
  it("Open PMTool", () => {
    cy.visit(Cypress.env("pmtool_url"));
  });

  it("Open Eshop", () => {
    cy.visit(Cypress.env("eshop_url"));
  });

  it("Open AutomationTestStore", () => {
    cy.visit(Cypress.env("automation_test_store_url"));
  });

  it("Open Webtrain", () => {
    cy.visit(Cypress.env("webtrain_url"));
  });
});

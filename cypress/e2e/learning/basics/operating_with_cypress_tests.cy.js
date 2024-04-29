describe("Operating with Cypress Tests", () => {
  it("Login test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });

  it.skip("BUG123 Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2").type("cypress_zima_2024");
  });
});

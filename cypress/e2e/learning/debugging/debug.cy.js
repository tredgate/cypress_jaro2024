describe("Debugging Learning", () => {
  it.skip("Debugging Pmtool", () => {
    cy.visit("https://tredgate.com/pmtool").debug();
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress").debug();
    cy.get(".btn").debug().click().debug();
  });

  it("Using pause() function", () => {
    cy.visit("https://tredgate.com/pmtool").pause();
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress").pause();
    cy.get(".btn").pause().click();
  });
});

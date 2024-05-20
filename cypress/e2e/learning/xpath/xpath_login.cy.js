describe("Learning XPath", () => {
  it("Login tests with XPath selectors", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.xpath("//input[@id='username']").type("cypress_zima_2024");
    cy.xpath('//input[@id="password"]').type("Zima2024Cypress");
    cy.xpath('//button[@type="submit"]').click();
    cy.xpath('//li[@id="user_dropdown"]/a').click();
    cy.xpath('//li[@id="logout"]/a').click();
  });
});

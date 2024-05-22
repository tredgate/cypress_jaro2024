import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("Běžím před každým testem.");
  });

  afterEach(() => {
    cy.log("Běžím po dokončení každého testu.");
  });

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Visit pmtool and login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });
});

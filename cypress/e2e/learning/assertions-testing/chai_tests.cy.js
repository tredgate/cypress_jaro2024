import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login header has text 'Login'", () => {
    cy.get(".form-title").should("have.text", "Login");
  });

  it.skip("FAILING: Login header has text 'Login2'", () => {
    cy.get(".form-title").should("have.text", "Login2");
  });

  it("Lost password link has text 'Password forgotten?'", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it("Welcome message in homepage contain text 'Vítej v testovací aplikaci'", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get("#welcome-page-header").should(
      "contain.text",
      "Vítej v testovací aplikaci"
    );
  });

  it("Username input has value 'username'", () => {
    cy.get("#username").type("Test").should("have.value", "Test");
  });

  it("Email input in Lost Password page have value", () => {
    new LoginPage().clickPasswordForgotten();
    cy.get("input[placeholder='Email']")
      .type("email")
      .should("have.value", "email");
  });

  it("Password input have form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Login button have class 'btn-info'", () => {
    cy.get("[type='submit']").should("have.class", "btn-info");
  });

  it("Login button is visible", () => {
    cy.get("[type='submit']").should("be.visible");
  });

  it("Pmtool title is visible", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Login button exist", () => {
    cy.get("[type='submit']").should("exist");
  });

  it("Lost password anchor exist", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username have placholder 'Username'", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password have placeholder 'Password'", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });

  it("Alert not exist after Pmtool opened", () => {
    cy.get(".alert-danger").should("not.exist");
  });
});

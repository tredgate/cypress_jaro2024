import { LoginPageCustom } from "../../../page-objects/pmtool/login_page_custom";

describe("Login Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPageCustom().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      new LoginPageCustom().usernameInput.isVisible();
    });

    it("Username have placeholder", () => {
      new LoginPageCustom().usernameInput.havePlaceholder("Username");
    });

    it("Username have value after type", () => {
      new LoginPageCustom().typeUsername("Test");
      new LoginPageCustom().usernameInput.haveText("Test");
    });
  });

  context("Password input tests", () => {
    it("Password is visible", () => {
      new LoginPageCustom().passwordInput.isVisible();
    });

    it("Password have placeholder 'Password'", () => {
      new LoginPageCustom().passwordInput.havePlaceholder("Password");
    });
  });
});

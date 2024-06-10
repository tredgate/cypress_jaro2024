import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      new LoginPage().usernameInputIsVisible();
    });

    it("Username have placeholder", () => {
      new LoginPage().usernameHavePlaceholder("Username");
    });

    it("Username have value after type", () => {
      new LoginPage().usernameHaveValue("TestUser");
    });
  });

  context("Password input tests", () => {
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Password have placeholder 'Password'", () => {
      new LoginPage().passwordHavePlaceholder("Password");
    });
  });

  context("Logo tests", () => {
    it("Logo is visible", () => {
      new LoginPage().logoIsVisible();
    });
  });

  context("Page header tests", () => {
    it("Page header is visible", () => {
      new LoginPage().pageHeaderIsvisible();
    });

    it("Page Header have text", () => {
      new LoginPage().pageHeaderHaveText("Login");
    });
  });

  context("Forgotten password? Tests", () => {
    it("Forgotten password? Is visible", () => {
      new LoginPage().passwordForgottenIsVisible();
    });

    it("Forgotten password? Have text", () => {
      new LoginPage().passwordForgottenHaveText("Password forgotten?");
    });
  });

  context("Remember me checkbox tests", () => {
    it("Remember me is visible", () => {
      new LoginPage().rememberMeIsVisible();
    });

    it("Remember me contain Test", () => {
      new LoginPage().rememberMeContainText("Remember Me");
    });
  });

  context("Login button tests", () => {
    it("Login button is visible", () => {
      new LoginPage().loginButtonIsVisible();
    });

    it("Login button have text", () => {
      new LoginPage().loginButtonHaveText("Login");
    });
  });
});

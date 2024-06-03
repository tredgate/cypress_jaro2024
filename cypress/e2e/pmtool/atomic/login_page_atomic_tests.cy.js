import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
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
});

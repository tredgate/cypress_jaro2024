import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("Teg-b Login Tests", () => {
  it("Login test using intercept", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});

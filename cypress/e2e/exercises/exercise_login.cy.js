import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Exercise - login/logout", () => {
  it("2x login and logout from Pmtool", () => {
    const username = "cypress_zima_2024";
    const password = "Zima2024Cypress";

    new LoginPage()
      .openPmtool()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickProfile()
      .clickLogout()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});

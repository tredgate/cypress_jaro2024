import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Lost password tests", () => {
  it("Lost password e2e test", () => {
    new LoginPage()
      .openPmtool()
      .clickPasswordForgotten()
      .typeUsername("lost_password_user")
      .typeEmail("lost_password@tredgate.cz")
      .clickSubmit();
  });

  it("Open Lost password and return to LoginPage", () => {
    new LoginPage().openPmtool().clickPasswordForgotten().clickBack();
  });
});

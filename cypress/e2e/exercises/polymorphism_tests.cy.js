import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });

  it("Logout from Projects page with extended class", () => {
    new HomePage().clickProjects().clickProfile().clickLogout();
  });

  it("Open pages with polymorphism classes", () => {
    new HomePage()
      .clickProjects()
      .clickDashboard()
      .clickProjects()
      .clickProfile()
      .clickLogout();
  });
});

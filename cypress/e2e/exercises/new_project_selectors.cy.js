import { faker } from "@faker-js/faker";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("CSS Selectors Exercise", () => {
  it("Create new project with selectors", () => {
    const projectName = faker.internet.displayName();

    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProjects()
      .clickAddProject()
      .typeName(projectName)
      .clickSave()
      .clickProfile()
      .clickLogout();
  });
});

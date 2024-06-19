import { LoginPage } from "../../page-objects/pmtool/login_page";
import usersData from "../../fixtures/create_user_data.json";
import { faker } from "@faker-js/faker";
import { UsersPage } from "../../page-objects/pmtool/users_page";

describe("Data Driven Tests - Create users", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers();
  });

  usersData.forEach((userData) => {
    it(`Create user with role ${userData.role} and login`, () => {
      const username =
        userData.username_prefix + faker.number.int({ max: 99999 });
      const email = faker.internet.email();
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      new UsersPage()
        .clickAddUser()
        .typeUsername(username)
        .typeEmail(email)
        .typePassword(userData.password)
        .typeFirstName(firstName)
        .typeLastName(lastName)
        .selectRole(userData.role)
        .clickSave()
        .clickProfile()
        .clickLogout()
        .typeUsername(username)
        .typePassword(userData.password)
        .clickLogin()
        .nameContainText(`${firstName} ${lastName}`);
    });
  });
});

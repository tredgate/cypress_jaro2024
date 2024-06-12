import { faker } from "@faker-js/faker";
import { UserApi } from "../../api/user_api";

describe("TEG#B user tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    cy.visit(Cypress.env("tegb_url"));
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it("Register and login via API", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email);
    userApi.login(username, password).then((response) => {
      const accessToken = response.body.access_token;
      cy.setCookie("access_token", accessToken);
    });
    cy.visit(Cypress.env("tegb_url") + "app");
  });
});

import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/user_api";

describe("Send HTTP Requests Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
  });

  it("POST registration TEG#B", () => {
    // ! Registrace pomocí API
    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.userId).to.exist;
      // ? alternativat k exist:
      expect(response.body).to.have.property("userId");
      expect(response.body.username).to.eq(username);
      expect(response.body.email).to.be.a("string");
    });

    // ! Ověření přihlášení přes frontend:
    cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(username);
    cy.get('[data-testid="password"]').type(password);
    cy.get('button[data-testid="log_in"]').click();
    cy.wait("@login_api").its("response.statusCode").should("eq", 201);
  });

  it("Register with API object", () => {
    new UserApi().register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it("Register and login with API object", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email).then((response) => {
      expect(response.status).to.eq(201);
    });
    userApi.login(username, login);
  });
});

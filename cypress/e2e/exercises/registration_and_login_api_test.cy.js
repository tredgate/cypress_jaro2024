import { faker } from "@faker-js/faker";

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
    cy.log(username);
  });

  it("POST registration and login TEG#B", () => {
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
    });

    // ! Přihlašování pomocí API
    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username: username,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

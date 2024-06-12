export class UserApi {
  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "user/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "auth/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}

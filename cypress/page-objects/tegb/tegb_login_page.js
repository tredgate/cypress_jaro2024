import { customElement } from "../../helpers/custom_element";

export class TegBLoginPage {
  constructor() {
    this.usernameInput = customElement('[data-testid="username"]');
    this.passwordInput = customElement('[data-testid="password"]');
    this.loginButton = customElement('button[data-testid="log_in"]');
    this.tegbUrl = Cypress.env("tegb_url");
  }

  openTegb() {
    cy.visit(this.tegbUrl);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.get().type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.get().type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.get().click();
    // TODO: přidej return dashboardu až bude hotový!
  }
}

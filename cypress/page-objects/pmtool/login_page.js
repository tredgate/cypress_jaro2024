import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = "[type='submit']";
    this.forgetPasswordButton = "#forget_password";
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickPasswordForgotten() {
    cy.get(this.forgetPasswordButton).click();
    return new LostPasswordPage();
  }
}

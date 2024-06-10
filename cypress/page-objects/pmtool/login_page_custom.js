import { customElement } from "../../helpers/custom_element";
import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPageCustom {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username");
    this.passwordInput = customElement("#password");
    this.rememberMeCheckbox = customElement(".checkbox");
    this.loginButton = customElement("[type='submit']");
    this.forgetPasswordButton = customElement("#forget_password");
    this.pageHeader = customElement("h3.form-title");
    this.logoImg = customElement(".login-page-logo img");
  }

  openPmtool() {
    cy.visit(this.url);
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
    return new HomePage();
  }

  clickPasswordForgotten() {
    this.forgetPasswordButton.get().click();
    return new LostPasswordPage();
  }
}

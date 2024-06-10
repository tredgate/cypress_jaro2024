import { customElement } from "../../helpers/custom_element";
import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
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

  usernameInputIsVisible() {
    this.usernameInput.isVisible();
    return this;
  }

  usernameHaveValue(username) {
    this.usernameInput.get().type(username);
    this.usernameInput.haveValue(username);
    return this;
  }

  usernameHavePlaceholder(placeholder) {
    this.usernameInput.havePlaceholder(placeholder);
    return this;
  }

  passwordHavePlaceholder(placeholder) {
    this.passwordInput.havePlaceholder(placeholder);
    return this;
  }

  rememberMeIsVisible() {
    this.rememberMeCheckbox.isVisible();
    return this;
  }

  rememberMeContainText(text) {
    this.rememberMeCheckbox.containsText(text);
    return this;
  }

  loginButtonIsVisible() {
    this.loginButton.isVisible();
    return this;
  }

  loginButtonHaveText(text) {
    this.loginButton.haveText(text);
    return this;
  }

  passwordForgottenHaveText(text) {
    this.forgetPasswordButton.haveText(text);
    return this;
  }

  passwordForgottenIsVisible() {
    this.forgetPasswordButton.isVisible();
    return this;
  }

  logoIsVisible() {
    this.logoImg.isVisible();
    return this;
  }

  pageHeaderIsvisible() {
    this.pageHeader.isVisible();
    return this;
  }

  pageHeaderHaveText(headerText) {
    this.pageHeader.haveText(headerText);
    return this;
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

  passwordIsVisible() {
    this.passwordInput.isVisible();
    return this;
  }

  passwordHavePlaceholder(placeholder) {
    this.passwordInput.havePlaceholder(placeholder);
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

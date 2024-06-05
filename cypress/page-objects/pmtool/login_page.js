import { HeaderSection } from "./common/header_section";
import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.rememberMeCheckbox = ".checkbox";
    this.loginButton = "[type='submit']";
    this.forgetPasswordButton = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.logoImg = ".login-page-logo img";
  }

  usernameInputIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHaveValue(username) {
    cy.get(this.usernameInput).type(username).should("have.value", username);
    return this;
  }

  usernameHavePlaceholder(placeholder) {
    cy.get(this.usernameInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  passwordHavePlaceholder(placeholder) {
    cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  rememberMeIsVisible() {
    cy.get(this.rememberMeCheckbox).should("be.visible");
    return this;
  }

  rememberMeContainText(text) {
    cy.get(this.rememberMeCheckbox).should("contain.text", text);
    return this;
  }

  loginButtonIsVisible() {
    cy.get(this.loginButton).should("be.visible");
    return this;
  }

  loginButtonHaveText(text) {
    cy.get(this.loginButton).should("have.text", text);
    return this;
  }

  passwordForgottenHaveText(text) {
    cy.get(this.forgetPasswordButton).should("have.text", text);
    return this;
  }

  passwordForgottenIsVisible() {
    cy.get(this.forgetPasswordButton).should("be.visible");
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }

  pageHeaderIsvisible() {
    cy.get(this.pageHeader).should("be.visible");
    return this;
  }

  pageHeaderHaveText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
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

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  passwordHavePlaceholder(placeholder) {
    cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
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

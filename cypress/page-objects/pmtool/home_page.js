import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }
}

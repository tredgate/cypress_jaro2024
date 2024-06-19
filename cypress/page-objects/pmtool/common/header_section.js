import { LoginPage } from "../login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.usernameSpan = ".username";
  }

  nameContainText(username) {
    cy.get(this.usernameSpan).should("contain.text", username);
    return this;
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

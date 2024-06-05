import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitle = "h3.page-title";
    this.addUserButton = '[test_id="Add User"]';
  }

  pageTitleIsVisible() {
    cy.get(this.pageTitle).should("be.visible");
    return this;
  }

  pageTitleHaveText(pageTitleText) {
    cy.get(this.pageTitle).should("have.text", pageTitleText);
    return this;
  }

  addUserButtonIsVisible() {
    cy.get(this.addUserButton).should("be.visible");
    return this;
  }

  addUserButtonHaveText(addUserButtonText) {
    cy.get(this.addUserButton).should("have.text", addUserButtonText);
    return this;
  }
}

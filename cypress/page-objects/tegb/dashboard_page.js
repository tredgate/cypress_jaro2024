import { customElement } from "../../helpers/custom_element";
import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.accountsButton = customElement(
      '[data-testid="accounts_section_link"]'
    );
    cy.intercept("/accounts/user/**").as("accounts_api");
  }

  clickAccounts() {
    this.accountsButton.get().click();
    cy.wait("@accounts_api");
    return new AccountsPage("@accounts_api");
  }
}

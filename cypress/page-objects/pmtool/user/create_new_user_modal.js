import { customElement } from "../../../helpers/custom_element";
import { UsersPage } from "../users_page";

export class CreateNewUserModal {
  constructor() {
    this.accessGroupSelect = customElement(
      '[data-testid="Access Group"] select'
    );
    this.usernameInput = customElement('[data-testid="Username"] input');
    this.passwordInput = customElement("#password");
    this.firstNameInput = customElement('[data-testid="First Name"] input');
    this.lastNameInput = customElement('[data-testid="Last Name"] input');
    this.emailInput = customElement('[data-testid="User Email"] input');
    this.saveButton = customElement('[type="submit"]');
  }

  selectRole(role) {
    this.accessGroupSelect.get().select(role);
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

  typeEmail(email) {
    this.emailInput.get().type(email);
    return this;
  }

  clickSave() {
    this.saveButton.get().click();
    return new UsersPage();
  }

  typeFirstName(firstName) {
    this.firstNameInput.get().type(firstName);
    return this;
  }

  typeLastName(lastName) {
    this.lastNameInput.get().type(lastName);
    return this;
  }
}

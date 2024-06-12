import { customElement } from "../../helpers/custom_element";

export class AccountsPage {
  constructor() {
    this.pageTitle = customElement('[data-testid="title"]');
  }

  titleHaveText(text) {
    this.pageTitle.haveText(text);
    return this;
  }
}

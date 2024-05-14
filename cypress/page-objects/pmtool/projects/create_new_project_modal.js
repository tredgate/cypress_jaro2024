import { TasksPage } from "./tasks_page";

export class CreateNewProjectModal {
  constructor() {
    this.nameInput = '[data-testid="Name"] input';
    this.saveButton = "button[type='submit']";
  }

  typeName(name) {
    cy.get(this.nameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new TasksPage();
  }
}

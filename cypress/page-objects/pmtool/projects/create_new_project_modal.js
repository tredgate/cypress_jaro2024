import { TasksPage } from "./tasks_page";

export class CreateNewProjectModal {
  constructor() {
    this.nameInput = '[data-testid="Name"] input';
    this.saveButton = "button[type='submit']";
    this.prioritySelect = 'div[data-testid="Priority"] select';
    this.statusSelect = 'div[data-testid="Status"] select';
    this.startDateInput = 'div[data-testid="Start Date"] input';
    this.uploadFileInputXpath = '//input[@type="file"][@data-msg-accept]';
    this.deleteAttachmentsLabel = ".delete_attachments";
  }

  selectPriority(priority) {
    cy.get(this.prioritySelect).select(priority);
    return this;
  }

  selectStatus(status) {
    cy.get(this.statusSelect).select(status);
    return this;
  }

  typeStartDate(date) {
    cy.get(this.startDateInput).type(date);
    return this;
  }

  uploadAttachment(attachmentName) {
    cy.fixture(attachmentName).as("projectAttachments");
    cy.xpath(this.uploadFileInputXpath).selectFile("@projectAttachments", {
      force: true,
    });
    cy.get(this.deleteAttachmentsLabel).should("be.visible");
    return this;
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

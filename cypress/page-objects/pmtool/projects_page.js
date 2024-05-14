import { CreateNewProjectModal } from "./projects/create_new_project_modal";

export class ProjectsPage {
  constructor() {
    this.addProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateNewProjectModal();
  }
}

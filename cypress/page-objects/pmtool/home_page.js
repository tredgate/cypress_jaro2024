import { LoginPage } from "./login_page";
import { ProjectsPage } from "./projects_page";

export class HomePage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.projectsLink = "#Projects a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  clickProjects() {
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
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

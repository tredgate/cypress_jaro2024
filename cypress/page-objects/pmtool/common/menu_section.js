export class MenuSection {
  constructor() {
    this.projectsLink = "#Projects a";
    this.dashboardLink = "#dashboard a";
  }

  clickDashboard() {
    const { HomePage } = require("../home_page");
    cy.get(this.dashboardLink).click();
    return new HomePage();
  }

  clickProjects() {
    const { ProjectsPage } = require("../projects_page");
    cy.get(this.projectsLink).click();
    return new ProjectsPage();
  }
}

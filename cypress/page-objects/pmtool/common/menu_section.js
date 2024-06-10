import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsLink = "#Projects a";
    this.dashboardLink = "#dashboard a";
    this.usersLink = "#Users a.menu-itemsitems1";
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

  clickUsers() {
    const { UsersPage } = require("../users_page");
    cy.get(this.usersLink).click();
    return new UsersPage();
  }
}

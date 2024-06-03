export class BasePage {
  constructor(path) {
    this.path = path;
    this.baseUrl = "https://tredgate.com/pmtool/index.php?";
  }

  visit() {
    cy.visit(this.baseUrl + this.path);
    return this;
  }
}

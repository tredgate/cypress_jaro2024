export class GeneralPOPage {
  constructor() {
    this.someElement = "selector";
  }

  actionWithElement() {
    // * Standardně používáme cy.get(this.someElement)
    cy.log(this.someElement);
  }
}

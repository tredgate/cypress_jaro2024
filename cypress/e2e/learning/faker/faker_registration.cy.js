import { faker } from "@faker-js/faker";

describe("Using faker", () => {
  it("Generate unique data with faker", () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    cy.log(randomName);
    cy.log(randomEmail);
    cy.log(faker.animal.cow());
  });
});

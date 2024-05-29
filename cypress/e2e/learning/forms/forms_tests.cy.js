describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get('input[name="subscription"]').check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check 2 Interests", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').check("reading");
    // ? Alternativní zakliknutí více prvků
    cy.get('input[name="interests[]"]').check(["travel", "music"]);
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
  });

  it("Check and uncheck checkbox", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("Clean and fill name", () => {
    // ! Napíše text za již existující hodnotu v inputu
    cy.get("#name").type("Test123");
    // ? Použijeme funkci clear na vyčištění pole
    cy.get("#name")
      .clear()
      .type("Petr Fifka")
      .should("have.value", "Petr Fifka");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("form").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!");
  });

  it("Upload file fixtures", () => {
    cy.fixture("test.txt").as("uploadFile");
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it("Type date", () => {
    cy.get("#datepicker").type("1990-12-31").should("have.value", "1990-12-31");
  });
});

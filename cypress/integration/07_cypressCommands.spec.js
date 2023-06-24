it("Get URL", () => {
  cy.visit("cypress/index.html");
  cy.url().should("contain", "cypress/index.html");
});

//---------------Title Command------------------
it("Get Title", () => {
  cy.visit("cypress/index.html");
  cy.title();
  cy.title().should("eql", "Cypress Tutorials");
});

//---------------Go Command // back or forward------------------
it("Go Command", () => {
  cy.visit("cypress/index.html");
  cy.get('.about').click();
  cy.go('back');
  cy.go('forward');
});

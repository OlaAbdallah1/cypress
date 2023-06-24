//---------------should commands------------------ //check if the actual result matches the expected result

it("Should be visible command", () => {
  cy.visit("cypress/index.html");
  cy.get("#courses").should("be.visible"); //true
  // cy.get('#courses').should('not.be.visible'); //false
});
it("Should have text command", () => {
  cy.visit("cypress/index.html");
  cy.get("#welcome").should("have.text", "Welcome to Cypress Tutorials"); //all of the text
});
it("Should contains text command", () => {
  cy.visit("cypress/index.html");
  cy.get("#welcome").should("contain", "Welcome to Cypress"); //part of the text
});
it("Should have class command", () => {
  cy.visit("cypress/index.html");
  cy.contains("wdio").should("have.class", "list4"); //have the class?
});

it("Should have css  command", () => {
  cy.visit("cypress/index.html");
  cy.get(".focus")
    .focus()
    .should("have.css", "background-color", "rgb(255, 0, 0)"); //have the css attribute and its value?
});
it("Should have css  command", () => {
  cy.visit("cypress/index.html");
  cy.get("#inputEmail")
    .should("have.css", "width", "759.2000122070312px"); //have the css atribute and its value?
});

it("Should have attribute command", () => {
  cy.visit("cypress/index.html");
  cy.get("#inputEmail")
    .should("have.attr", "placeholder"); //have the attribute 
    // .should("have.attr", "placeholder", "Email address"); //or with  attr value

});

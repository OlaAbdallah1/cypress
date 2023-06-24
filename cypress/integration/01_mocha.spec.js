///<reference types="cypress"/>


//descripe or context -> suite our test cases
describe("login functionality ", function () {
  //befor hock will sxecute only once before all the test cases
  //if we have 3 test cases it will execute 1 time
  before(() => {
    cy.log("inside before hock");
  });
  //it will execute before each test case
  //if we have 3 test cases it will execute 3 times
  beforeEach(() => {
    cy.log("inside before each hock");
  });

  //after hock will sxecute only once after all the test cases
  //if we have 3 test cases it will execute 1 time
  after(() => {
    cy.log("inside after hock");
  });
  //it will execute after each test case
  //if we have 3 test cases it will execute 3 times
  afterEach(() => {
    cy.log("inside after each hock");
  });

  // it -> descripe a test case in mocha
  // it -> has 2 arguments, one for the name of the test case, and the second for the function that includes the steps of the test case
  it("should login with vlid email and password correctly", function () {
    cy.log("should login with vlid email and password correctly"); //log to print something
  });
  it("should not login if password is wrong", function () {
    cy.log("I am a test case 2"); //log to print something
  });
  it("should be able to reset the password", function () {
    cy.log("I am a test case 2"); //log to print something
  });
});

describe("orders functionality ", function () {
  it("Order food", function () {
    cy.log("order"); //log to print something
  });
});

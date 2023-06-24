it("get element by HTML tag name", () => {
  cy.visit("cypress/index.html");
  cy.get("h1"); //get element by HTML tag name
  cy.get("h2"); //get element by HTML tag name
  cy.get("button"); //get element by HTML tag name // return all the elements that match the tag name
});

it("get element by id", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  cy.get("#courses"); //get element by id #+id
  cy.get("#welcome"); //get element by id #+id
});
it("get element by class name", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  cy.get(".course-list"); //get element by class name .+id
  cy.get(".country-list"); //get element by class name .+id
  cy.get(".list1");
  //in case of compund classes we only choose one
  cy.get(".list1.web");
});
it("get element by attribute", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  //to find the element using any attribute we use []
  cy.get('[name="Developer"]'); //get element by attribute
  cy.get('[id="Tester"]'); //get element by attribute
});
it("get first & last element from a list of elements", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  cy.get("h1").first();
  cy.get("h1").last();
});
it("get an element from a list of elements by index", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  cy.get("h1").eq(2);
  cy.get("h1").eq(3);
});
it("get an element from a list of elements with a condition", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  cy.get("li").filter('.web') //filter some element from a list of elements by condition //i can use any css selector -class , id name ...etc.
});
it("get the elements using the children by parent name", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  //find elements using the father class, with or without a condition -arguments, css selector -class id etc.
  cy.get('.course-list').children();
  cy.get('.course-list').children('.web'); 
  cy.get('.course-list').children('.web').first(); 
  cy.get('.course-list').children('.web').last(); 
  cy.get('.course-list').children('.web').eq(2); 
});
it("get the elements using the children by parent name", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  //find elements using the parent class,using find command
  cy.get('.course-list').find('.web'); 
});
it("get the elements using the parent command by child name", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  //find elements using the children class,using parent command
  //return the direct parent
  cy.get('.list1.web').parent(); 
  cy.get('.list1').parent(); 
});
it("get the elements using the parents by child name", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  //find elements using the children class,using parents command
  //return all parents until reach <html> 
  cy.get('.web.list1').parents(); 
});
it("get the elements using the sblings", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
  //find elements using sblings command
  //return all sblings  
  cy.get('.list1.web').siblings(); 
  cy.get('.list1.web').siblings('.web'); 
});
it.only("get the elements using the visible text", () => {
  //only used to implement this case only
  cy.visit("cypress/index.html");
//to find elements using text with contains command
  cy.contains('Welcome'); 
  cy.get('li').contains('Cypress');
  
  //from cypress runner //not recommended
  cy.get('body > :nth-child(5)')
  cy.get('.country-list > .list1')
});

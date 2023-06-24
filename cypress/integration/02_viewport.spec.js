var arr = ['iphone-8','ipad-mini','macbook-11']

//run the same tese with different viewport sizes
arr.forEach(viewport => {
    it("should visit the website correctly", () => {
        // we can use cy.viewport to set the width and height of the test runner
        // Usefully to test our application in different viewport
        //https://docs.cypress.io/api/commands/viewport
        cy.viewport(viewport); //pre defined viewport for the devices
        cy.visit("cypress/index.html");
      });
});


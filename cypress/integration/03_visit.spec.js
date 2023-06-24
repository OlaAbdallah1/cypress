it("should visit the website correctly", () => {
  //with visit command we can visit any website or lcalhost or any html file
  //beseUrl at cypress.json '/'  ,, thsts recommended bu cypress
  //we can add a second arg , opject -< inside it we can write our options https://docs.cypress.io/api/commands/visit
  cy.visit("/search", {
    qs: {
      q: "cypress",
    },
  });
});

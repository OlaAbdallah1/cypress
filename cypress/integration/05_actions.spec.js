//-----------------click command-------------------- 
it('Click command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('.invoice-button').last().click();//jist work on one element 
    cy.get('.invoice-button').last().click('bottom'); //مكان الكليك
    cy.get('.invoice-button').click({multiple: true});//click all elements with class 'invoice-button'
});

//click on hidden button
it('Click on hidden button', ()=> {
    cy.visit("cypress/index.html");
    cy.get('.hidden-button').click({force: true});
});

//---------------------type command //write in any input-------------------------
it('Type command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('#inputEmail').type('ola@gmail.com'); 
    cy.get('#inputPassword').type('123456789{enter}'); //enter action-keyboard- after typing email  //we can use any key 
});
//type command //write in hidden input
it('Type command on hidden input', ()=> {
    cy.visit("cypress/index.html");
    cy.get('#coverdInput').type('test@gmail.com',{force: true,delay:1000}); //delayed  typing 
});

//---------------------select command--------------------------
it('Select command ', ()=> {
    cy.visit("cypress/index.html");
    cy.get('#courses').select('selenium');  //select from dropdown list //based on value or  text
    cy.get('#courses').select(3); //select based on index
});

//---------------------Check command // checkboxes------------------------
it('Check command ', ()=> {
    cy.visit("cypress/index.html");
    cy.get('#Fries').check()  //ckeck a ckeckbox
    cy.get('#Nuts').check()  //ckeck a ckeckbox
    cy.get('#Nuts').uncheck()  //unckeck a ckeckbox
    // cy.get('#Developer').uncheck()  //unckeck a radiobutton doesn't work!!!
    cy.get('#Tester').check()  //ckeck a radiobutton
});

//--------------------Double click command----------------------- 
it('Double click command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('[value="Click me"]').dblclick();  
});
//--------------------Right click command----------------------- 
it('Right click command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('[value="Click me"]').rightclick();  
});

//--------------------Focus command----------------------- 
it('Focus command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('.focus').focus().type('text');  
});
//--------------------Blur command //only when focus----------------------- 
it('Blur command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('.focus').focus();  
    cy.get('.focus').blur();  
});

//--------------------Trigger Hovor over ----------------------- 
it('Trigger command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('.trigger').trigger('mouseover'); //hoverover
    cy.get('.trigger').trigger('mouseout');   
 
});
//--------------------Long press ----------------------- 
it.only('LongPress command', ()=> {
    cy.visit("cypress/index.html");
    cy.get('.trigger').trigger('mousedown');
    cy.wait(5000); //press for 5000 ms 
    cy.get('.trigger').trigger('mouseup');

 
});


Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://www.saucedemo.com/');
    cy.get("#user-name").type(email)
    cy.get('[name="password"]').type(password)
    cy.get("#login-button").click();

})


Cypress.Commands.add('verifyLogin', (locator) => { 
    cy.locator(locator).should('contain.text','Products');
    cy.url().should('eq','https://www.saucedemo.com/inventory.html');
})

Cypress.Commands.add('logout', () => { 
    cy.get("#react-burger-menu-btn").click();
    cy.get('#logout_sidebar_link').click();
})

Cypress.Commands.add('verifyItemDetails', (locator1,locator2,item_name,locator3,item_price) => { 
    cy.get(locator1).click();
    cy.get(locator2).should('contain.text',item_name);
    cy.get(locator3).should('contain.text',item_price);
})

Cypress.Commands.add('checkout', (locator1,locator2,locator3,firstName,locator4,lastName,locator5,postalcode,locator6) => { 
    cy.get(locator1).click();
    cy.get(locator2).click();
    cy.get(locator3).type(firstName);
    cy.get(locator4).type(lastName);
    cy.get(locator5).type(postalcode);
    cy.get(locator6).click();
})

Cypress.Commands.add('verifyItemDetailsOnCheckOut', (arr,locator10,locator11,messasge) => { 
    //cy.get(locator1).should('contain.text',item_name1); //apply for loop*
    //cy.get(locator2).should('contain.text',item_price1);
    //cy.get(locator3).should('contain.text',item_name2);
   // cy.get(locator4).should('contain.text',item_price2);
   // cy.get(locator5).should('contain.text',payment_information);
   // cy.get(locator6).should('contain.text',shipping_information);
    //cy.get(locator7).should('contain.text',subtotal);
   // cy.get(locator8).should('contain.text',tax);
   // cy.get(locator9).should('contain.text',total);
   for (var i=0;i<=arr ;i++){
       cy.get(arr(i)).should('contain.text','arr(i)');

   }
    cy.get(locator10).click();
    cy.get(locator11).should('contain.text',messasge);
})

//locator1,item_name1,locator2,item_price1,locator3,item_name2,locator4,item_price2,locator5,payment_information,
                                                    //locator6,shipping_information,locator7,subtotal,locator8,tax,locator9,total

                                        
Cypress.Commands.add('mouseOver', (locator,text) => { 
    cy.get(locator).contains(text).invoke('show').trigger('mouseover').should('be.visible');
})
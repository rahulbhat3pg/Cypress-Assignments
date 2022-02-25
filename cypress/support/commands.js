Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get("#user-name").type(email)
    cy.get('[name="password"]').type(password)
    cy.get("#login-button").click();
})


Cypress.Commands.add('verifyLogin', (locator) => {
    cy.locator(locator).should('contain.text', 'Products');
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
})


Cypress.Commands.add('logout', () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get('#logout_sidebar_link').click();
})


Cypress.Commands.add('verifyItemDetails', (locator1, locator2, item_name, locator3, item_price) => {
    cy.get(locator1).click();
    cy.get(locator2).should('contain.text', item_name);
    cy.get(locator3).should('contain.text', item_price);
})


Cypress.Commands.add('checkout', (locator1, locator2, locator3, firstName, locator4, lastName, locator5, postalcode, locator6) => {
    cy.get(locator1).click();
    cy.get(locator2).click();
    cy.get(locator3).type(firstName);
    cy.get(locator4).type(lastName);
    cy.get(locator5).type(postalcode);
    cy.get(locator6).click();
})


Cypress.Commands.add('verifyItemDetailsOnCheckOut', (arrLocator, arrValue, locator1, locator2, messasge) => {
    for (var i = 0; i < arrLocator.length; i++) {
        cy.get(arrLocator[i]).should('contain.text', arrValue[i]);
    }
    cy.get(locator1).click();
    cy.get(locator2).should('contain.text', messasge);
})


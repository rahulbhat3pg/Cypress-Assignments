//Redirect to Checkout Page , FINISH and CANCEL buttons should display

describe('RedirecToCheckoutPageAndDisplayButtons', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData').then(credentials => { // 'TestData'(file name) under fixtures(folder) having data
            this.credentials = credentials;
        })
        cy.fixture('Locators').then(path => { //'Locators'(file name) under fixtures(folder) having data
            this.path = path;
        })
    });

    it("DisplayButtons", function () {
        cy.login(this.credentials.Username1, this.credentials.PasswordAll); //method to login user1 with data fetched from fixtures 
        cy.get(this.path.Product_Name).click(); //adding a product to cart 
        cy.checkout(this.path.CartLink, this.path.CheckoutButton, this.path.First_Name, this.credentials.FirstName, this.path.Last_Name, this.credentials.LastName
            , this.path.Postal_Code, this.credentials.PostalCode, this.path.ContinueButton);//method to checkout (in commands.js file under support folder) with data fetched from fixtures                                                                                              
        cy.get(this.path.FinishButton).should('be.visible'); //Display Finish button
        cy.get(this.path.CancelButton).should('be.visible'); //Display Cancel button
    })
});   

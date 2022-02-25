// Verify Item details by completing all the steps for an order placement and display its shipping and payment details

describe('verifyProductShippingAndPaymentInfo', function () {

    before(function () { //fetching data from fixtures
        cy.fixture('TestData').then(credentials => { // 'TestData'(file name) under fixtures(folder) having data
            this.credentials = credentials;
        })

        cy.fixture('Locators').then(path => { //'Locators'(file name) under fixtures(folder) having data
            this.path = path;
        })

        cy.fixture('LocatorsCheckout').then(loop => { //'Locators'(file name) under fixtures(folder) having data
            this.loop = loop;
        })

    });

    it("AddVerifyAndDisplayProductInfoAndMessage", function () {
        cy.login(this.credentials.Username1, this.credentials.PasswordAll); //method to login (in commands.js file under support folder) with data fetched from fixtures 
        cy.get(this.path.Product_Name).click(); //adding a product to cart 
        cy.get(this.path.Product_Name_1).click(); //adding a product to cart 
        cy.checkout(this.path.CartLink, this.path.CheckoutButton, this.path.First_Name, this.credentials.FirstName, this.path.Last_Name, this.credentials.LastName,
            this.path.Postal_Code, this.credentials.PostalCode, this.path.ContinueButton);
        //method to checkout (in commands.js file under support folder) with data fetched from fixtures 
        cy.verifyItemDetailsOnCheckOut(this.loop.Locators, this.loop.Value, this.path.FinishButton, this.path.Order_Complete_Header, this.credentials.OrderCompleteMessage);
        //method to verify details of product added in cart (in commands.js file under support folder) with data fetched from fixtures



    })
})
